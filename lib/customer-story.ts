import { api as ghostApi } from 'blog/lib/api';

export const getCustomerStories = () => {
  return ghostApi.posts.browse({
    include: 'tags',
    filter: 'tag:user-story',
    fields: ['id', 'uuid', 'title', 'slug', 'feature_image', 'created_at', 'updated_at'],
    // A fixed page size here is what dropped the oldest stories off the site.
    limit: 'all',
  });
};

export const getCustomerStory = (slug: string) => {
  return ghostApi.posts.read({ slug });
};
