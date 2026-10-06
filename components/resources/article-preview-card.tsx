import { ContentType } from "types/enums";
// Util
import { classNames } from "lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { GradientBanner } from "components/core/gradient-banner";
import { PostOrPage } from "@tryghost/content-api";
import { Avatar } from "@chakra-ui/react";
// Components
import { DateDisplay } from "./date-display";

export const ArticlePreviewCard = ({ post, className = '' }: { post: PostOrPage; className?: string }) => {
  const author = post.authors[0];

  const reduceMotion = useReducedMotion();

  const isOfType = (type: string) => post.tags.some((tag) => tag.name.toLowerCase() === type.toLowerCase());

  const isOfTypeVideo = isOfType(ContentType.VIDEO);
  const isOfTypePodcast = isOfType(ContentType.PODCAST);
  const isOfTypeGuide = isOfType(ContentType.GUIDE);

  const color = isOfTypePodcast ? 'blue-300' : isOfTypeVideo ? 'green-300' : isOfTypeGuide ? 'orange-100' : 'secondary';
  const textColor = isOfTypePodcast ? 'blue-500' : isOfTypeVideo ? 'green-500' : isOfTypeGuide ? 'orange-900' : 'third';
  const link = isOfTypeVideo || isOfTypePodcast ? post.codeinjection_foot : isOfTypeGuide ? `/guides/${post.slug}` : `/blog/${post.slug}`;

  return (
    <a
      href={link}
      target={isOfTypePodcast || isOfTypeVideo ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      <motion.div
        className={classNames(
          `h-fit group cursor-pointer border-third border-opacity-10 rounded-2xl border-2 lg:max-w-[366px]`,
          `bg-${color}`,
          className,
        )}
        whileHover={
          reduceMotion
            ? null
            : {
                scale: 1.1,
                rotate: '-0.8deg',
              }
        }
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 140,
          damping: 10,
          mass: 1,
        }}
      >
        <GradientBanner url={post.feature_image} alt="post image" gradientFrom={color} />
        <div className="flex flex-col justify-between p-8 gap-8">
          {isOfTypePodcast || isOfTypeVideo ? (
            <div>
              <h3 className={`text-6 text-${textColor} leading-[34px] font-medium font-hero`}>{post.title}</h3>
              <div className="flex items-center justify-between w-full">
                <h3 className={`text-6 text-${textColor} font-black leading-[34px] font-hero`}>
                  {isOfTypePodcast ? 'Listen on Spotify' : 'Watch on Youtube'}
                </h3>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.35192 23.648C8.57692 23.8727 8.88192 23.9989 9.19992 23.9989C9.51792 23.9989 9.82292 23.8727 10.0479 23.648L21.5999 12.096V21.2C21.5999 21.5183 21.7264 21.8235 21.9514 22.0485C22.1764 22.2736 22.4817 22.4 22.7999 22.4C23.1182 22.4 23.4234 22.2736 23.6484 22.0485C23.8735 21.8235 23.9999 21.5183 23.9999 21.2V9.2C23.9999 8.88174 23.8735 8.57652 23.6484 8.35147C23.4234 8.12643 23.1182 8 22.7999 8H10.7999C10.4817 8 10.1764 8.12643 9.95139 8.35147C9.72635 8.57652 9.59992 8.88174 9.59992 9.2C9.59992 9.51826 9.72635 9.82348 9.95139 10.0485C10.1764 10.2736 10.4817 10.4 10.7999 10.4H19.9039L8.35192 21.952C8.1272 22.177 8.00098 22.482 8.00098 22.8C8.00098 23.118 8.1272 23.423 8.35192 23.648Z"
                    fill={isOfTypeVideo ? '#005900' : '#003D5A'}
                  />
                </svg>
              </div>
            </div>
          ) : (
            <>
              <h3 className={`text-3xl text-${textColor} leading-9 font-bold font-hero`}>{post.title}</h3>
              <div className="flex items-center justify-between gap-2 w-full">
                <Avatar
                  size="lg"
                  name={author.name}
                  src={author.profile_image}
                  sx={{
                    background: 'transparent',
                  }}
                  borderColor={'thirdOpaque'}
                  borderWidth={2}
                />
                <DateDisplay date={post.published_at} fontWeight="medium" color={textColor} />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </a>
  );
};
