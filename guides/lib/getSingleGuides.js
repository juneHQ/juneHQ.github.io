import { api } from 'blog/lib/api';

export async function getSingleGuides(postSlug) {
  return await api.posts
    .read({
      include: 'tags,authors',
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
