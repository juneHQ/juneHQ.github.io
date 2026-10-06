/**
 * Visitors used to be recognised as logged-in June users through the June API
 * (`${JUNE_API_HOST}/logged_in` and `/apps`). The API has been shut down and the site is now
 * fully static, so every visitor is logged out and no request is made.
 */
export const useAuth = () => {
  return { loggedIn: false, user: null, apps: undefined };
};
