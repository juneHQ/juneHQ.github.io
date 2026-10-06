import clsx from 'clsx';

export const DesktopCTA = ({ loggedIn, mode }: { loggedIn: boolean; mode?: 'light' | 'dark' }) => {
  const dashboardButtonStyle =
    mode === 'dark'
      ? 'bg-primary text-white'
      : 'bg-primary text-white hover:bg-white hover:text-primary border-primary';

  const loginButtonStyle = mode === 'dark' ? 'text-white hover:underline' : 'text-primary hover:underline';
  const getPrimaryButtonStyle =
    mode === 'dark'
      ? 'bg-primary text-white'
      : 'bg-primary text-white hover:bg-white hover:text-primary border-primary';

  return (
    <div className="flex justify-center items-center space-x-6">
      {loggedIn ? (
        <a
          className={`relative h-12 px-6 flex justify-center items-center font-hero ${dashboardButtonStyle} border-2 rounded-[12px] text-[16px] leading-normal font-semibold`}
          href={process.env.JUNE_APP_HOST}
        >
          Dashboard
        </a>
      ) : (
        <>
        </>
      )}
    </div>
  );
};
