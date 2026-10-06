import { PostOrPage } from "@tryghost/content-api";
import { api } from "./api";

export async function getSinglePost(postSlug: string): Promise<PostOrPage | void> {
  return await api.posts
    .read({
      slug: postSlug,
    }, {
      include: ['tags', 'authors']
    })
    .catch((err) => {
      console.error(err);
    });
}
