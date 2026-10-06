import styled from '@emotion/styled';
import React from 'react';

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const GradientBackground = () => {
  return (
    <Video playsInline autoPlay muted loop poster="/home/hero/gradient-poster-16x9.webp">
      <source src="/home/hero/gradient-16x9.webm" type="video/webm" />
      <source src="/home/hero/gradient-16x9.mp4" type="video/mp4" />
    </Video>
  );
};
