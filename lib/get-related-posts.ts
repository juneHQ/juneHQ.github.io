import { api } from "blog/lib/api";
// Core
import { ArrayOrValue, IncludeParam, PostOrPage } from "@tryghost/content-api";

/**
 * Get posts related to a provided post. Currently this fetches posts that have
 * similar tags to the provided post
 * 
 * @param { PostOrPage } post - Post to get related posts from
 * @param { number } [limit] - Max number of posts to fetch 
 * @param { boolean } [returnNonEmpty] - If this is set to true and no related posts were found,
 * then the the first posts that aren't the `post` will be fetched and returned (even if they aren't related).
 * If this is set to false and no related posts were found, an empty array will be returned
 * 
 * @return { PostOrPage[] } Related posts and possibly non-related posts if `returnNonEmpty` is true
 */
export const getRelatedPosts = async (post: PostOrPage, limit: number = 2, returnNonEmpty: boolean = true): Promise<PostOrPage[]> => {
    try {

        if(!post.tags) { 
            throw new Error("Tags array not found on post. Did you forget to fetch the post's tags?")
        }

        // Assuming you define relatedness by sharing a tag
        // Extract tags from the fetched post
        const tags = post.tags.map(tag => tag.slug);
    
        // Reuse fetching options
        const include: ArrayOrValue<IncludeParam> = ['tags', 'authors'];
        const commonFilter = `id:-${post.id}`;

        const hasTopicTag = tags.some(tag => tag.startsWith('topic_'));
        const tagForSimilarity = hasTopicTag ? tags.find(tag => tag.startsWith('topic_')) : tags[0];

        let relatedPosts = [];
        // Fetch posts related by the first tag for simplicity; modify as needed
        if (tags.length > 0) {
          relatedPosts = await api.posts.browse({
            filter: `tag:${tagForSimilarity}+${commonFilter}`, // Exclude the original post
            limit, // Limit the number of related posts; adjust as needed
            include,
          });
        }

        if (relatedPosts.length) return relatedPosts;
        else return await api.posts.browse({
          filter: commonFilter,
          limit,
          include
        });
    } catch (err) {
        console.error(err);
        throw err; // Rethrow or handle as needed
    }
}