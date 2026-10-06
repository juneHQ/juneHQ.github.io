import { Box, Flex } from '@chakra-ui/react';

export default function Video({ id = '', autoplay = true }) {
  return (
    <Flex py={6} px={{ base: 0, md: 8 }} alignItems="center" justifyContent="center">
      <Box flex={1} maxWidth="2xl" background="gray.900" p={{ base: 2, sm: 4 }} borderRadius="xl">
        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${id}?playlist=${id}&loop=1&mute=1${autoplay ? '&autoplay=1' : ''}`}
            title="YouTube video player"
            frameBorder="0"
            allow={
              'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;' +
              (autoplay ? ' autoplay;' : '')
            }
            allowFullScreen
          ></iframe>
        </div>
      </Box>
    </Flex>
  );
}
