import { api } from "blog/lib/api";
import { ArrayOrValue, IncludeParam, PostOrPage } from "@tryghost/content-api";

/**
 * Get the 5 most recent posts.
 *
 * @param { number } [limit=5] - Max number of posts to fetch (default is 5)
 *
 * @return { PostOrPage[] } - The most recent posts
 */
export const getRecentPosts = async (limit: number = 5): Promise<PostOrPage[]> => {
  try {
    // Define the options to include tags and authors
    const include: ArrayOrValue<IncludeParam> = ['tags', 'authors'];

    // Fetch the most recent posts, sorted by published_at in descending order
    const recentPosts = await api.posts.browse({
      limit, // Limit the number of posts to fetch (5 by default)
      include,
      order: 'published_at DESC', // Fetch the most recent posts
    });


    return recentPosts;
  } catch (err) {
    console.error(err);
    throw err; 
  }
};
