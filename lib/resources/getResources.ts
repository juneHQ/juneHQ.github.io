import { api } from 'blog/lib/api';

export async function getResources() {
  return await api.posts
    .browse({
      include: ['tags', 'authors'],
      filter: 'tag:-user-story+tag:-guides',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}
