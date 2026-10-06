import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import useWindowSize from '@rooks/use-window-size';
import { HorizontalVideoCard } from './video-cards/horizontal-video-card';

interface Card {
  title: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  color: string;
  backgroundColor: string;
}
const cards: Card[] = [
  {
    title: 'AI powered analysis',
    description: 'Answer advanced questions using June AI powered by GPT-4',
    // videoUrl: 'landing-page-header-2024/videos/o0q1cvpoxve0m78cvm9s',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706254299/landing-page-header-2024/videos/o0q1cvpoxve0m78cvm9s.mp4',
    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583504/landing-page-header-2024/images/hqgxrzfoqo3rowxdlfjg.png',
    color: '#560059',
    backgroundColor: '#F9E2FB',
  },
  {
    title: 'Step by step guidance',
    description: 'Get 1:1 guidance and coaching calls to do things the right way',
    // videoUrl: 'landing-page-header-2024/videos/b4vjsgeufma6rybvpgtx',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706711667/landing-page-header-2024/videos/b4vjsgeufma6rybvpgtx.mp4',

    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583504/landing-page-header-2024/images/tt4jis7ff5y3qrxecrts.png',
    color: '#003D5A',
    backgroundColor: '#D2F3FF',
  },
  {
    title: 'Fast CMD-K search',
    description: 'The fastest way to look up your customers',
    // videoUrl: 'landing-page-header-2024/videos/cuu48ycy0scfbnrs5k2g',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706682550/landing-page-header-2024/videos/cuu48ycy0scfbnrs5k2g.mp4',
    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583504/landing-page-header-2024/images/d02kenb4zwuaeeqatzb0.png',
    color: '#5F2700',
    backgroundColor: '#FFE9C8',
  },
  {
    title: 'Simple to set up',
    description: 'We do everything we can to make your life easier',
    // videoUrl: 'landing-page-header-2024/videos/dq6ssihzmpuk1ytnqnft',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706254299/landing-page-header-2024/videos/dq6ssihzmpuk1ytnqnft.mp4',
    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583503/landing-page-header-2024/images/rdi856jvioou26jder2h.png',
    color: '#005900',
    backgroundColor: '#DAF9D4',
  },
  {
    title: 'Insights',
    description: 'Easily understand who is using your features',
    // videoUrl: 'landing-page-header-2024/videos/kg6ellcgdwwooeicvpsq',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706254299/landing-page-header-2024/videos/kg6ellcgdwwooeicvpsq.mp4',
    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583504/landing-page-header-2024/images/dbx98fnzphar6hnlsvro.png',
    color: '#800000',
    backgroundColor: '#FFD2E1',
  },
  {
    title: 'Better every week',
    description: 'We never missed a weekly changelog in 2 years',
    // videoUrl: 'landing-page-header-2024/videos/ft8wpfkm2pov5jas6jdg',
    videoUrl:
      'https://res.cloudinary.com/dhjaxcce6/video/upload/v1706711668/landing-page-header-2024/videos/ft8wpfkm2pov5jas6jdg.mp4',
    posterUrl:
      'https://res.cloudinary.com/dhjaxcce6/image/upload/v1706583504/landing-page-header-2024/images/rzzbpzocbmga5xuw8rpg.png',
    color: '#1A0B00',
    backgroundColor: '#EDE6DE',
  },
];

export const HorizontalCards = () => {
  const sliderRef = useRef();
  const cardsRef = useRef<HTMLDivElement>(null);

  const [animateCards, setAnimateCards] = useState(false);
  const [isCardsOpen, setIsCardsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const controls = useAnimationControls();

  const { innerWidth: screenWidth } = useWindowSize();
  const isCardCountEven = screenWidth > 1919 || (screenWidth > 767 && screenWidth < 1280)

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const distanceFromTop = cardsRef.current.getBoundingClientRect().top;

        if (distanceFromTop <= 280) {
          setAnimateCards(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardsRef, controls]);

  const prevCard = () => {
    if (currentIndex > 1) {
      if (sliderRef.current) (sliderRef.current as any).slickPrev();
    }
  };

  const nextCard = () => {
    if (currentIndex < (screenWidth < 1280 ? 5 : screenWidth < 1920 ? 4 : 4)) {
      if (sliderRef.current) (sliderRef.current as any).slickNext();
    }
  };

  const settings = {
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    initialSlide: 1,
    addaptiveHeight: true,
    centerMode: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2559,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
      console.log(oldIndex, newIndex);
    },
  };

  if (mounted)
    return (
      <>
        <div className="relative flex justify-center font-hero">
          <div className="flex">
            <div className="text-primary text-center text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
              And so much more...
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: animateCards ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className={`hidden select-none md:flex lg:${
                animateCards ? 'flex' : 'hidden'
              } absolute right-[80px] ml-[308px] w-[88px] h-[44px] bg-[#F1F3F5] rounded-full`}
            >
              <div
                onClick={prevCard}
                className="cursor-pointer flex justify-center items-center m-1 w-[36px] h-[36px] rounded-full hover:bg-white hover:shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]"
              >
                <img className="pointer-events-none" src="/home/horizontal-cards/arrow-left.svg" alt="Arrow-left" />
              </div>
              <div
                onClick={nextCard}
                className="cursor-pointer flex justify-center items-center m-1 w-[36px] h-[36px] rounded-full hover:bg-white hover:shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]"
              >
                <img className="pointer-events-none" src="/home/horizontal-cards/arrow-right.svg" alt="Arrow-right" />
              </div>
            </motion.div>
          </div>
        </div>

        <div ref={cardsRef} id="slider-container" className="cursor-grab active:cursor-grabbing">
          <Slider {...settings} ref={sliderRef} className="relative mb-[20px]">
            {cards.map((card, index) => (
              <motion.div
                layout="position"
                layoutId={`card-container-${index}`}
                key={index}
                initial={{
                  position: 'relative',
                  ...(isCardCountEven
                    ? {
                        marginLeft: index === 0 ? '48%' : index === 1 ? `-48%` : `-${index * 96}%`,
                        right: index >= 2 ? '-48%' : '0px',
                      }
                    : {
                        marginLeft: index === 0 ? '96%' : index === 1 ? `0%` : `-${index * 96}%`,
                        right: index >= 2 ? '-96%' : '0px',
                      }),
                  zIndex: -index,
                }}
                animate={
                  animateCards && {
                    marginLeft: '0px',
                    right: 0,
                    y: !isCardsOpen && [0, Math.floor(Math.random() * (16 - -16 + 1)) + -16, 0],
                    transitionEnd: { zIndex: 0 },
                  }
                }
                transition={{ type: 'spring', stiffness: 100, damping: 14 }}
                onAnimationComplete={() => {
                  // fix for the bug where current slide index is still in 0 even though settings.initialSlide is set to 1, thus requires 2 clicks to go to the next slide
                  sliderRef?.current?.slickGoTo(1);
                  setIsCardsOpen(true);
                }}
                className=" pt-10 lg:pt-[80px]"
              >
                <HorizontalVideoCard key={index + '-' + card.videoUrl} card={card} index={index} />
              </motion.div>
            ))}

            {screenWidth > 767 && <div />}
            {screenWidth > 767 && <div />}
          </Slider>
        </div>
      </>
    );
};

export default HorizontalCards;