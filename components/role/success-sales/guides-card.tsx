import { useRef } from 'react';
import { motion } from 'framer-motion';
import Arrow from './arrow';

export const GuidesCard = ({ card, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="px-5 md:px-4">
      <a href={card.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          layout="position"
          layoutId={`card-${index}`}
          id={index + '-' + card.imageUrl}
          initial={{ margin: 'auto' }}
          className={`relative overflow-hidden m-auto bg-[${card.backgroundColor}] select-none text-[${card.color}] relative font-hero rounded-[20px] w-full overflow-hidden shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]`}
          onMouseEnter={handleMouseEnter}
        >
          <div
            style={{ willChange: 'opacity, transform' }}
            className="relative z-20 px-[8.4vw] pt-[8.4vw] md:px-[4vw] md:pt-[4vw] xl:px-[2.6vw] xl:pt-[2.6vw] 3xl:px-[2vw] 3xl:pt-[2vw]"
          >
            <div className="flex w-full justify-between">
              <h3 className="text-[4.5vw] md:text-[2.6vw] xl:text-[1.665vw] 3xl:text-[1.25vw] leading-[1.41] font-black">
                {card.title}
              </h3>
              <Arrow color={card.color} className="cursor-pointer" />
            </div>
            <p className="my-[0.55vw] text-[3.37vw] md:text-[1.95vw] xl:text-[1.25vw] 3xl:text-[0.94vw] leading-[1.55] font-medium">
              {card.description}
            </p>
          </div>
          <div className="relative z-10 h-full w-full pl-[8.4vw] mt-[8.4vw] md:pl-[4vw] md:mt-[4vw] xl:pl-[2.6vw] xl:mt-[2.6vw] 3xl:pl-[2vw] 3xl:mt-[2vw rounded-tl-[20px] overflow-hidden drop-shadow-image bento-video-card">
            <img src={card.imageUrl} className="object-cover w-full h-full max-w-full bg-transparent" />
          </div>
        </motion.div>
      </a>
    </div>
  );
};
