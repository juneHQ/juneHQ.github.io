import Link from "next/link";
// Util
import { classNames } from "lib/utils";
import { TOCItem } from "blog/lib/toc";
// Core
import { PostOrPage } from "@tryghost/content-api";
import { CollapsibleCard } from "./collapsible-card";
// Components
import { AuthorCard } from "./author-card";
import { Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type ArticleSidebarProps = {
  post: PostOrPage;
  className?: string;
  sticky?: boolean;
  tocId?: string;
  toc: TOCItem[];
  recentPosts: PostOrPage[];
  recentRelatedPosts: PostOrPage[];
};

export const ArticleSidebar = ({
  post,
  className,
  tocId,
  sticky = true,
  toc,
  recentPosts,
  recentRelatedPosts,
}: ArticleSidebarProps) => {


  const topicTag = post.tags.find((tag) => tag.slug.includes('topic_'))

  const topicTagSlug = topicTag?.slug.replace('topic_', '')
  const topicTagTitle = topicTag?.name

  // Create a state to track scroll position
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this threshold as needed
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div
      className={classNames(
        sticky ? `sticky ${scrolled ? 'top-[5%]' : 'top-[15%]'} left-0 transition-all duration-300 ease-in-out` : '',
        'mt-6 flex gap-[24px] self-start justify-self-start w-full xl:w-[370px] overflow-hidden',
        className,
      )}
    >
      <div className="w-full flex flex-col gap-4">
        <div>
          {post.authors.map((_author) => (
            <AuthorCard key={_author.id} author={_author} />
          ))}
        </div>
        <CollapsibleCard
          isOpenByDefault={true}
          title="Table of contents"
          colors={{ bg: 'bg-secondary', border: 'border-third/20', text: 'text-third', icon: '#560059' }}
        >
          <div className={classNames(!tocId ? 'toc' : '', 'text-third')} id={tocId}></div>
          <div className="hidden">
            <nav>
              <ol>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </CollapsibleCard>
        <CollapsibleCard
          isOpenByDefault={false}
          title="Related posts"
          colors={{ bg: 'bg-blue-300', border: 'border-blue-500/10', text: 'text-blue-500', icon: '#003D5A' }}
        >
          <nav className="text-blue-500">
            <ol className="space-y-4">
              {recentRelatedPosts?.map((item) => (
                <li key={item.id} className="hover:underline">
                  <a href={`${item.slug}`}>{item.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </CollapsibleCard>
        <CollapsibleCard
          isOpenByDefault={false}
          title="Recent posts"
          colors={{ bg: 'bg-green-300', border: 'border-green-500/10', text: 'text-green-500', icon: '#005900' }}
        >
          <nav>
            <ol className="space-y-4">
              {recentPosts?.map((item) => (
                <li key={item.id} className="hover:underline">
                  <a href={`${item.slug}`}>{item.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </CollapsibleCard>
        {topicTag && (
          <Link href={`/blog/topic/${topicTagSlug}`} className="group hover:underline" passHref>
            <a className="text-orange-800 flex flex-col gap-6 border-2 relative rounded-2xl px-8 py-5 overflow-hidden w-full bg-orange-100 border-orange-500/10 text-xl cursor-pointer font-black group">
              <img
                alt="Cloud" 
                src="/cloud.png"
                className="block w-[420px] max-w-none absolute overflow-auto top-[-120px] left-[-100px]"
              />
              <div className="flex items-center gap-4 relative">
                <span>All articles about {topicTagTitle}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 fill-orange-800 flex-shrink-0 group-hover:-rotate-45 transition-transform duration-300">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
