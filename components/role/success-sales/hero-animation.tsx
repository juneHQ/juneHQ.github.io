import { useRef } from "react";
import { motion } from "framer-motion";
import { HeroVideoModal } from "components/home/components/hero-video-modal";
import { useDisclosure, useOutsideClick } from "@chakra-ui/react";

const HeroAnimation = ({ animateHero }) => {
  const { isOpen: isVideoModalOpen, onOpen: openVideoModal, onClose: closeVideoModal } = useDisclosure();

  const playerRef = useRef();

  useOutsideClick({
    ref: playerRef,
    handler: closeVideoModal,
  });

  return (
    <div className="relative flex justify-center w-full">
      {isVideoModalOpen && (
        <HeroVideoModal
          playerRef={playerRef}
          isVideoModalOpen={isVideoModalOpen}
          closeVideoModal={closeVideoModal}
          url="https://www.youtube.com/watch?v=l-C1EQDm1S0"
        />
      )}
      <motion.div
        initial={{ width: '100%' }}
        animate={animateHero ? { width: '1192px', height: '100%' } : { width: '100%', height: '100%' }}
        transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}
        className={`relative flex justify-center ${
          animateHero ? 'rounded-[20px] rounded-tr-[0px] lg:rounded-[40px] lg:rounded-tr-[0px]' : ''
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
            animate={animateHero ? { borderRadius: '40px' } : { borderRadius: '0px' }}
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
            className={`hidden lg:block absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4]`}
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
              animate={animateHero ? { borderRadius: '40px' } : { borderRadius: '0px' }}
              transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
              className={`relative top-0 left-0 h-full w-full bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4]`}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.3, transformOrigin: 'bottom' }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
        >
          <motion.div
            initial={{ padding: 0, top: '-48px' }}
            animate={animateHero ? { padding: '24px', top: '0px' } : { padding: '0px', top: '-48px' }}
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
            className={`relative w-screen h-full lg:w-[1192px] lg:h-fit`}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: animateHero ? 1 : 0, scale: animateHero ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.6, delay: animateHero ? 1 : 0, type: 'spring', stiffness: 200, damping: 20 }}
              src="/auto-generated-arrow.svg"
              alt="auto-generated"
              className="hidden lg:block object-contain absolute top-[-144px] right-[252px] z-50"
            />
            <div className="px-[24px] lg:px-0 h-full w-full">
              <div
                id="hero-video-container"
                className="relative flex flex-col items-center justify-center w-full h-full"
              >
                <div
                  onClick={openVideoModal}
                  className="cursor-pointer absolute z-50 p-[8px] h-[154px] w-[154px] rounded-full drop-shadow-multi-colored bg-gradient-to-r from-[#F9E2FB] via-[#C9F0FF] to-[#DAF9D4]"
                >
                  <img className="bg-white rounded-full" src="/success-sales-play-button.svg" alt="Play" />
                </div>
                <img
                  className="drop-shadow-[0_2px_8px_rgba(13,19,27,0.25)]"
                  src="/success-sales-video-thumbnail.png"
                  alt="Thumbnail"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
