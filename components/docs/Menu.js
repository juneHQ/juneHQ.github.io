import Link from 'next/link';
import { create } from 'zustand';
import { company, juneOutline, quick, track, user } from './icons';

const useMenuStore = create((set) => ({
  sectionOpen: null,
  setSectionOpen: (section) => set((state) => ({ sectionOpen: state.sectionOpen === section ? null : section })),
}));

const routes = [
  {
    title: 'Getting started',
    links: [
      { path: '/docs/start-here', label: 'Start here', icon: '/docs/logo-gray.svg' },
      { path: '/docs/plan', label: 'What should I track?', icon: '/docs/what-should-i-track.svg' },
    ],
  },
  {
    title: 'Quickstart',
    links: [
      { path: '/docs/quickstart/install', label: 'Install', icon: '/docs/install.svg' },
      { path: '/docs/quickstart/identify', label: 'Identify users', icon: '/docs/identify.svg' },
      { path: '/docs/quickstart/track-event', label: 'Track user behaviour', icon: '/docs/track.svg' },
    ],
  },
  {
    title: 'Advanced',
    links: [
      { path: '/docs/advanced/group', label: 'Identify groups', icon: '/docs/identify.svg' },
      { path: '/docs/advanced/track-event', label: 'Track group behaviour', icon: '/docs/track.svg' },
    ],
  },
  {
    title: 'SDKs',
    links: [
      {
        title: 'Web',
        icon: '/docs/web.svg',
        links: [
          { path: '/docs/tracking/web/browser', label: 'Browser' },
          { path: '/docs/tracking/web/react', label: 'React & Next.js' },
        ],
      },
      {
        title: 'Server',
        icon: '/docs/server.svg',
        links: [
          { path: '/docs/tracking/server/node-js', label: 'Node.JS' },
          { path: '/docs/tracking/server/python', label: 'Python' },
          { path: '/docs/tracking/server/ruby', label: 'Ruby' },
        ],
      },
      {
        title: 'HTTP API',
        icon: '/docs/http.svg',
        path: '/docs/tracking/http-api',
        links: [
          { path: '/docs/tracking/http-api/authentication', label: 'Authentication' },
          { path: '/docs/tracking/http-api/identify', label: 'Identify' },
          { path: '/docs/tracking/http-api/group', label: 'Group' },
          { path: '/docs/tracking/http-api/track', label: 'Track' },
          { path: '/docs/tracking/http-api/page', label: 'Page' },
        ],
      },
    ],
  },
];

function NavLink({ path, label, icon, active, external }) {
  return (
    <Link href={path} external={external} target={external ? '_blank' : '_parent'}>
      <a
        className={`flex gap-2 items-center py-1 px-2 text-sm ${active ? 'font-medium' : 'font-normal'} rounded-md ${
          active ? 'text-purple-500' : 'text-gray-700'
        } hover:bg-gray-100 transition-all duration-100 ease-in cursor-pointer mb-1`}
      >
        {icon && <img className="w-5 h-5" src={icon} />}
        <span>{label}</span>
      </a>
    </Link>
  );
}

const getIdentionLevel = (level) => {
  switch (level) {
    case 0:
      return 'pl-2';
    case 1:
      return 'pl-5';
    default:
      return '';
  }
};

function Section({ title, links, currentRoute, icon, level = 0 }) {
  const { sectionOpen, setSectionOpen } = useMenuStore();

  const isOpen = true;

  return (
    <div className={`${level > 0 ? 'pl-2' : ''}`}>
      <div
        onClick={() => setSectionOpen(title)}
        className={`flex gap-2 items-center py-1 text-sm ${
          level > 0 ? 'font-normal' : 'font-semibold'
        } rounded-md text-gray-700
         hover:bg-gray-100 transition-all duration-100 ease-in  mb-1`}
      >
        {icon && <img className="w-5 h-5" src={icon} />}
        <span>{title}</span>
      </div>
      {isOpen && (
        <div className={`border-l border-gray-200 ${getIdentionLevel(level)}`}>
          {links.map((link) => {
            if ('links' in link) {
              return <Section key={link.title} currentRoute={currentRoute} level={level + 1} {...link} />;
            } else {
              return <NavLink key={link.path} active={currentRoute === link.path} {...link} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default function Menu({ currentRoute = '/docs' }) {
  return (
    <div className="flex flex-col justify-between overflow-y-scroll h-screen pb-10">
      <div className="flex flex-col">
        <div className="mb-4">
          <Link href="/docs">
            <a className="flex items-center">
              <div className="flex gap-2 items-center text-lg font-normal text-primary">
                <img src="/logo.svg" />
                <span className="font-semibold"> Docs</span>
              </div>
            </a>
          </Link>
        </div>

        <div className="flex flex-col">
          {routes.map((section) => (
            <Section key={section.title} currentRoute={currentRoute} {...section} />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-5">
        <NavLink external path="https://help.june.so" label="Help center" icon="/docs/help.svg" />
        <NavLink external path="https://analytics.june.so" label="Go to June home" icon="/docs/home.svg" />
      </div>
    </div>
  );
}
