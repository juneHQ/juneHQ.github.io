import { api } from "blog/lib/api";

/**
 * Get all tags from the blog.
 * 
 * @return { Tag[] } - All tags from the blog
 */
export const getTopicTags = async () => {
  try {
    const tags = await api.tags.browse({
      limit: 'all'
    });

    return tags;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
