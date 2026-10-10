// Every visitor is logged out (see useAuth) and the June app is shut down, so there is no
// call to action left: no "Dashboard" link to the app, nothing for logged-out visitors.
export const DesktopCTA = (_props: { loggedIn: boolean; mode?: 'light' | 'dark' }) => {
  return <div className="flex justify-center items-center space-x-6" />;
};
