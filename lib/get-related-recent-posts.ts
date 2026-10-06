import { api } from "blog/lib/api";
import { ArrayOrValue, IncludeParam, PostOrPage } from "@tryghost/content-api";

/**
 * Get the 5 most recent posts with the same tag as the provided post.
 * If no related posts are found, returns the most recent posts.
 *
 * @param { PostOrPage } post - Post to get related posts from
 * @param { number } [limit=5] - Max number of posts to fetch (default is 5)
 *
 * @return { PostOrPage[] } - The most recent posts with the same tag as the provided post,
 * or just the most recent posts if no related posts are found
 */
export const getRelatedRecentPosts = async (post: PostOrPage, limit: number = 5): Promise<PostOrPage[]> => {
  try {
    if (!post.tags) {
      throw new Error("Tags array not found on post. Did you forget to fetch the post's tags?");
    }

    // Extract tags from the fetched post
    const tags = post.tags.map((tag) => tag.slug);
    const include: ArrayOrValue<IncludeParam> = ['tags', 'authors'];
    const commonFilter = `id:-${post.id}`; // Exclude the original post

    const hasTopicTag = tags.some(tag => tag.startsWith('topic_'));
    const tagForSimilarity = hasTopicTag ? tags.find(tag => tag.startsWith('topic_')) : tags[0];

    let relatedPosts = [];
    // Fetch posts related by tag if tags exist
    if (tags.length > 0) {
      relatedPosts = await api.posts.browse({
        filter: `tag:${tagForSimilarity}+${commonFilter}`,
        limit,
        include,
        order: 'published_at DESC',
      });
    }

    // If no related posts found, return most recent posts
    if (!relatedPosts.length) {
      return await api.posts.browse({
        filter: commonFilter,
        limit,
        include,
        order: 'published_at DESC',
      });
    }

    return relatedPosts;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
