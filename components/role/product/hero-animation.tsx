import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = ({ selectedFolder, animateHero, onEnded }) => {
  const video1 = useRef();
  const video2 = useRef();
  const video3 = useRef();

  const [animationFinished, setAnimationFinished] = useState(false);

  const playNextVideo = () => {
    if (animationFinished) {
      if (selectedFolder.index === 0) {
        video3.current.pause();
        video3.current.currentTime = 0;
        video2.current.pause();
        video2.current.currentTime = 0;

        video1.current.play();
      }
      if (selectedFolder.index === 1) {
        video3.current.pause();
        video3.current.currentTime = 0;
        video1.current.pause();
        video1.current.currentTime = 0;

        video2.current.play();
      }
      if (selectedFolder.index === 2) {
        video1.current.pause();
        video1.current.currentTime = 0;
        video2.current.pause();
        video2.current.currentTime = 0;

        video3.current.play();
      }
    }
  };

  useEffect(() => {
    playNextVideo();
  }, [selectedFolder, animationFinished]);

  return (
    <div className="relative flex justify-center w-full">
      <motion.div
        initial={{ width: '100%' }}
        animate={animateHero ? { width: '1192px', height: '100%' } : { width: '100%', height: '100%' }}
        transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}
        className={`relative flex justify-center ${
          animateHero ? 'rounded-[20px] rounded-tr-[0px] lg:rounded-[30px] lg:rounded-tr-[0px]' : ''
        }-z-10 left-0`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.72, 0, 0.12, 1] }}
          className=""
        >
          <motion.div
            initial={{ borderRadius: '0px' }}
            animate={animateHero ? { borderRadius: '30px' } : { borderRadius: '0px' }}
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
            className={`hidden lg:block absolute top-0 left-0 h-full w-full bg-[#92E9FD]`}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 block w-full h-full lg:hidden"
            initial={{ paddingLeft: '0px', paddingRight: '0px' }}
            animate={
              animateHero ? { paddingLeft: '24px', paddingRight: '24px' } : { paddingLeft: '0px', paddingRight: '0px' }
            }
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
          >
            <motion.div
              initial={{ borderRadius: '0px' }}
              animate={animateHero ? { borderRadius: '30px' } : { borderRadius: '0px' }}
              transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
              className={`relative top-0 left-0 h-full w-full bg-[#92E9FD]`}
            ></motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute pb-0 bottom-0 h-fit left-0 rounded-bl-[12px] lg:rounded-bl-[20px] overflow-hidden">
          <img src="/hero-cloud.png" alt="hero-cloud" className="h-[371px] w-[532px]" />
        </div>
        <div className="absolute pb-0 bottom-0 h-fit right-0 rounded-br-[12px] lg:rounded-br-[20px] overflow-hidden">
          <img src="/hero-cloud.png" alt="hero-cloud" className="h-[371px] w-[532px] scale-x-[-1]" />
        </div>
        <motion.div
          initial={{ scale: 0.3, transformOrigin: 'bottom' }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
          onAnimationComplete={() => {
            setAnimationFinished(true);
          }}
        >
          <motion.div
            initial={{ padding: 0, top: '-48px' }}
            animate={animateHero ? { padding: '24px', top: '0px' } : { padding: '0px', top: '-48px' }}
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
            className={`relative w-screen h-full lg:w-[1192px] lg:h-[980px]`}
          >
            <div className="px-[24px] lg:px-0 h-full w-full">
              <div
                id="hero-video-container"
                className="relative flex flex-col w-full h-full rounded-[12px] lg:rounded-[20px] shadow-[0_2px_8px_rgba(13,19,27,0.25)] overflow-hidden"
              >
                <div className="relative z-20 flex items-center gap-x-[0.8vw] pl-[1.6vw] lg:pl-[20px] w-full h-[4.4vw] max-h-[43px] bg-white border-b-[1px] border-[#E9ECEF]">
                  <div className="h-[1vw] w-[1vw] max-h-[12px] max-w-[12px] rounded-full bg-[#ED6A5E]" />
                  <div className="h-[1vw] w-[1vw] max-h-[12px] max-w-[12px] rounded-full bg-[#F4BF50]" />
                  <div className="h-[1vw] w-[1vw] max-h-[12px] max-w-[12px] rounded-full bg-[#61C554]" />
                </div>

                <div className="relative w-full h-full origin-left scale-x-[1.002]">
                  <video
                    ref={video1}
                    id={'hero-video-player'}
                    poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1706625064/landing-page-header-2024/images/rkodxwpmh0fkqx0leekg.png"
                    onEnded={() => {
                      onEnded();
                      playNextVideo();
                    }}
                    playsInline
                    controls={false}
                    muted={true}
                    preload="auto"
                    className={`top-0 left-0 ${selectedFolder.index === 0 ? 'z-10 relative' : 'z-0 absolute'}`}
                  >
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_640/v1705400380/landing-page-header-2024/qlbsjsjpz0hi0z0foznc.mp4"
                      media="(max-width: 640px)"
                      type="video/mp4"
                    />
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_1280/v1705400380/landing-page-header-2024/qlbsjsjpz0hi0z0foznc.mp4"
                      media="(max-width: 1280px)"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto/v1705400380/landing-page-header-2024/qlbsjsjpz0hi0z0foznc.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video
                    ref={video2}
                    id={'hero-video-player'}
                    poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1706625996/landing-page-header-2024/images/qzoxkpf25a6zifxjunid.png"
                    onEnded={() => {
                      onEnded();
                      playNextVideo();
                    }}
                    playsInline
                    controls={false}
                    muted={true}
                    preload="auto"
                    className={`bg-blue-200 top-0 left-0 ${
                      selectedFolder.index === 1 ? 'z-10 relative' : 'z-0 absolute'
                    }`}
                  >
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_640/v1705400380/landing-page-header-2024/ykdsiohrpugeewrhnbcj.mp4"
                      media="(max-width: 640px)"
                      type="video/mp4"
                    />
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_1280/v1705400380/landing-page-header-2024/ykdsiohrpugeewrhnbcj.mp4"
                      media="(max-width: 1280px)"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto/v1705400380/landing-page-header-2024/ykdsiohrpugeewrhnbcj.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <video
                    ref={video3}
                    id={'hero-video-player'}
                    poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1706625996/landing-page-header-2024/images/qzoxkpf25a6zifxjunid.png"
                    onEnded={() => {
                      onEnded();
                      playNextVideo();
                    }}
                    playsInline
                    controls={false}
                    muted={true}
                    preload="auto"
                    className={`bg-green-200 top-0 left-0 ${
                      selectedFolder.index === 2 ? 'z-10 relative' : 'z-0 absolute'
                    }`}
                  >
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_640/v1705400380/landing-page-header-2024/tcm9rwkyazz79wu7l6bp.mp4"
                      media="(max-width: 640px)"
                      type="video/mp4"
                    />
                    <source
                      srcSet="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_1280/v1705400380/landing-page-header-2024/tcm9rwkyazz79wu7l6bp.mp4"
                      media="(max-width: 1280px)"
                      type="video/mp4"
                    />
                    <source src="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto/v1705400380/landing-page-header-2024/tcm9rwkyazz79wu7l6bp.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
