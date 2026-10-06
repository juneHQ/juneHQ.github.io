import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import useWindowSize from "@rooks/use-window-size";
import { GuidesCard } from "./guides-card";

interface Card {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  backgroundColor: string;
  url: string;
}
const cards: Card[] = [
  {
    title: 'Health scores',
    description: 'Create and assign health scores to your clients in HubSpot',
    imageUrl: '/guides/health-score.png',
    color: '#5F2700',
    backgroundColor: '#FFE9C8',
    url: '/guides/health-score',
  },
  {
    title: 'Upselling & expansion',
    description: 'Surface the right accounts at the right time to monetize them',
    imageUrl: '/guides/expansion.png',
    color: '#1A0B00',
    backgroundColor: '#EDE6DE',
    url: '/guides/upsell',
  },
  {
    title: 'Converting trials',
    description: 'Automate workflows to support and convert customers while trialing',
    imageUrl: '/guides/guide-hs.png',
    color: '#005900',
    backgroundColor: '#DAF9D4',
    url: '/guides/how-to-convert-free-trials-onboard-customers-with-june-hubspot',
  },
  {
    title: 'Close renewals',
    description: 'Come in prepared to renew your customers',
    imageUrl: '/guides/renewals.png',
    color: '#800000',
    backgroundColor: '#FFD2E1',
    url: '/guides/renewals',
  },
  {
    title: 'Onboarding & activation',
    description: 'Help accounts that are struggling with customised interactions',
    imageUrl: '/guides/companies.png',
    color: '#5F2700',
    backgroundColor: '#FFE9C8',
    url: '/guides/finding-activation-milestones',
  },
  {
    title: 'Churn prevention',
    description: 'Find common patterns across your churned customers',
    imageUrl: '/guides/update-record.png',
    color: '#800000',
    backgroundColor: '#FFD2E1',
    url: '/guides/churn-prediction-and-prevention',
  },
];

export const Guides = () => {
  const sliderRef = useRef();
  const cardsRef = useRef<HTMLDivElement>(null);

  const [animateCards, setAnimateCards] = useState(false);
  const [isCardsOpen, setIsCardsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const controls = useAnimationControls();

  const { innerWidth: screenWidth } = useWindowSize();
  const isCardCountEven = screenWidth > 1919 || (screenWidth > 767 && screenWidth < 1280);

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
    adaptiveHeight: true,
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
        <div className="relative flex justify-center font-hero mt-16 lg:mt-40">
          <div className="flex items-end">
            <div>
              <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center">
                Success Playbooks
              </h2>
              <p className="px-[24px] max-w-[600px] lg:max-w-full mt-[8px] lg:mt-[16px] text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-center">
                Steal our proven strategies to make your users more successful.
              </p>
            </div>
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
                className="mt-10 lg:mt-[80px]"
              >
                <GuidesCard key={index + '-' + card.imageUrl} card={card} index={index} />
              </motion.div>
            ))}

            {screenWidth > 767 && <div />}
            {screenWidth > 767 && <div />}
          </Slider>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animateCards ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className={`hidden select-none md:flex lg:${
            animateCards ? 'flex' : 'hidden'
          } absolute left-1/2 transform -translate-x-1/2 w-[88px] h-[44px] bg-[#F1F3F5] rounded-full`}
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
      </>
    );
};

export default Guides;
