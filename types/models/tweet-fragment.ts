/**
 * Tweet object based on `tweet-types`, made into June-specific format
 */
export interface TweetFragment {
  created_at: string;
  text: string;
  author_id: string;
  id: string;
  link?: string;
  user: {
    username: string;
    name: string;
    profile_image_url: string;
    id: string;
    verified: boolean;
  };
}
