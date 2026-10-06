import { useRef } from 'react';
import { motion } from 'framer-motion';

export const HorizontalVideoCard = ({ card, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="px-5 md:px-4">
      <motion.div
        layout="position"
        layoutId={`card-${index}`}
        id={index + '-' + card.videoUrl}
        initial={{ margin: 'auto' }}
        className={`relative m-auto bg-[${card.backgroundColor}] select-none text-[${card.color}] relative font-hero h-full rounded-[20px] w-full overflow-hidden shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]`}
        onMouseEnter={handleMouseEnter}
      >
        <div
          style={{ willChange: 'opacity, transform' }}
          className="absolute z-20 px-[8.4vw] pt-[8.4vw] md:px-[4vw] md:pt-[4vw] xl:px-[2.6vw] xl:pt-[2.6vw] 3xl:px-[2vw] 3xl:pt-[2vw]"
        >
          <h3 className="text-[4.5vw] md:text-[2.6vw] xl:text-[1.665vw] 3xl:text-[1.25vw] leading-[1.41] font-black">
            {card.title}
          </h3>
          <p className="my-[0.55vw] text-[3.37vw] md:text-[1.95vw] xl:text-[1.25vw] 3xl:text-[0.94vw] leading-[1.55] font-medium">
            {card.description}
          </p>
        </div>
        <div className="relative z-10 h-full w-full p-0 m-0 rounded-[20px] bento-video-card">
          <video
            id={'video-' + index}
            ref={videoRef}
            controls={false}
            muted={true}
            preload="auto"
            className="object-cover w-full h-full max-w-full bg-transparent"
          >
            <source src={card.videoUrl} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
};
