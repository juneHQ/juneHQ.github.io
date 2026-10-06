import { ContentType } from "types/enums";
import React, { useState } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { Avatar } from "@chakra-ui/react";

export const ContinueReadingAccordion = ({ posts }: { posts: PostOrPage[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-hero mt-12 rounded-[20px] w-full xl:max-w-3xl overflow-hidden shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]">
      <div
        className="relative flex justify-between items-center bg-gradient-to-t from-transparent via-transparent to-cyan-500/50 w-full px-6 lg:px-8 py-[22px] cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <img
          src="/cloud.png"
          alt="Small floating cloud"
          className="absolute w-[932px] h-[460px] max-w-[932px] right-0 top-[-332px] top-0"
        />
        <h1 className="relative text-xl font-black text-gray-900">Continue reading</h1>
        <svg
          className={open ? 'rotate-180' : ''}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 15.75L12 8.25L19.5 15.75"
            stroke="#0D131B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`flex flex-col divide-y divide-gray-800/10 px-6 lg:px-8 ${open ? 'block' : 'hidden'}`}>
        {posts.map((post, index) => <PostOrPageRowItem key={post.slug} post={post} />)}
      </div>
    </div>
  );
};

const PostOrPageRowItem = ({ post }: { post: PostOrPage }) => {
  const author = post.authors[0];

  const isOfType = (type: string) => post.tags.some((tag) => tag.name.toLowerCase() === type.toLowerCase());

  const isOfTypeVideo = isOfType(ContentType.VIDEO);
  const isOfTypePodcast = isOfType(ContentType.PODCAST);
  const isOfTypeGuide = isOfType(ContentType.GUIDE);

  const link =
    isOfTypeVideo || isOfTypePodcast
      ? post.codeinjection_foot
      : isOfTypeGuide
      ? `/guides/${post.slug}`
      : `/blog/${post.slug}`;

  return (
    <a href={link} target={isOfTypePodcast || isOfTypeVideo ? '_blank' : undefined} rel="noopener noreferrer">
      <div className="py-4 flex justify-between items-start gap-10">
        <h2 className={`text-base font-black font-hero text-gray-800`}>{post.title}</h2>
        {isOfTypePodcast || isOfTypeVideo ? (
          <>
            {isOfTypePodcast && <img src="/content/spotify.svg" alt="Spotify Podcast" />}
            {isOfTypeVideo && <img src="/content/youtube.svg" alt="Youtube video" className="mr-[-4px]" />}
          </>
        ) : (
          <Avatar width={6} height={6} name={author.name} src={author.profile_image} />
        )}
      </div>
    </a>
  );
};
