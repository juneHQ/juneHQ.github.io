import { ArrayOrValue, IncludeParam } from "@tryghost/content-api";
import { api } from "./api";

interface GetPostsParams {
  filter?: string;
  include?: ArrayOrValue<IncludeParam>;
}

export async function getPosts(params?: GetPostsParams) {
  const filter = params?.filter ?? 'tag:-user-story+tag:-guide+tag:-video+tag:-podcast';
  const include = params?.include ?? ['tags', 'authors'];

  try {
    return await api.posts.browse({
      include,
      filter,
      limit: 'all',
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}