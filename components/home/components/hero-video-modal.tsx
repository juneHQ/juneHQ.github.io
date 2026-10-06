import WistiaReactPlayer from 'react-player/wistia';
import YoutubeReactPlayer from 'react-player/youtube';
import ReactModal, { Styles } from 'react-modal';
import React from 'react';
import { Box, CloseButton, Flex } from '@chakra-ui/react';

export interface HeroVideoModalProps {
  isVideoModalOpen: boolean;
  closeVideoModal: () => void;
  playerRef: React.RefObject<WistiaReactPlayer>;
  url: string;
}

const modalStyles: Styles = {
  overlay: {
    zIndex: 1400,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    border: 'unset',
    background: 'unset',
    padding: 'unset',
    borderRadius: 'unset',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const HeroVideoModal = React.forwardRef<HTMLDivElement, HeroVideoModalProps>(
  ({ closeVideoModal, isVideoModalOpen, playerRef, url }) => {
    const ReactPlayer = url.includes(`wistia`) ? WistiaReactPlayer : YoutubeReactPlayer;
    return (
      <ReactModal isOpen={isVideoModalOpen} style={modalStyles}>
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <CloseButton pos="absolute" top={4} right={4} color="white" size="lg" onClick={closeVideoModal} />
          <Box
            w="100%"
            h="100%"
            maxH={['35%', '35%', '40%', '80%']}
            maxW={['100%', '100%', '80%', '70%']}
            borderRadius="lg"
            overflow="hidden"
            ref={playerRef}
          >
            <ReactPlayer
              options={{
                fitStrategy: 'cover',
                fullscreenButton: true,
              }}
              width="100%"
              height="100%"
              url={url}
              controls={true}
              playing={true}
              playsinline={true}
            />
          </Box>
        </Flex>
      </ReactModal>
    );
  },
);

HeroVideoModal.displayName = 'HeroVideoModal';
