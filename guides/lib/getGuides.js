import { api } from 'blog/lib/api';

export async function getGuides() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      filter: 'tag:guide',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}
