import Link from 'next/link';

interface RecentContentLinkProps {
  href: string;
  date: string;
  title: string;
  className?: string;
}

export default function RecentContentLink({ href, date, title, className }: RecentContentLinkProps) {
  return (
    <Link href={href} passHref prefetch={false}>
      <a className="font-hero text-lg tracking-normal text-[#0D131B] w-full group" target="_blank" rel="noreferrer">
        <div className="flex justify-between gap-1 w-full">
          <div className="text-gray-900 group-hover:underline">{title}</div>
          <div className="text-gray-500 flex-shrink-0">{date}</div>
        </div>
      </a>
    </Link>
  );
}
