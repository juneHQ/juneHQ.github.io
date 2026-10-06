import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex } from '@chakra-ui/react';
import HeroAnimation from './hero-animation';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export function HeroSection() {
  const [isOpen, setOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY >= 10 && !animateHero) {
        setAnimateHero(true);
      }

      if (window.scrollY <= 10 && animateHero) {
        setAnimateHero(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [animateHero]);

  const folders = [
    {
      name: 'Ready to go reports',
      color: '#560059',
      bgColor: '#F9E2FB',
      img: <img src="/home/hero/reports-icon.svg" alt="Reports" />,
      index: 0,
    },
    {
      name: 'Customer profiles',
      color: '#003D5A',
      bgColor: '#C9F0FF',
      img: <img src="/home/hero/profiles.svg" alt="Profiles" />,
      index: 1,
    },
    {
      name: 'Synced with your CRM',
      color: '#005900',
      bgColor: '#DAF9D4',
      img: <img src="/home/hero/sync-with-crm.svg" alt="CRM" />,
      index: 2,
    },
  ];
  const [selectedFolder, setSelectedFolder] = useState(folders[1]);

  const onEnded = () => {
    if (selectedFolder.name === 'Ready to go reports') {
      setSelectedFolder(folders[1]);
    } else if (selectedFolder.name === 'Customer profiles') {
      setSelectedFolder(folders[2]);
    } else if (selectedFolder.name === 'Synced with your CRM') {
      setSelectedFolder(folders[0]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <MotionFlex
            layout
            flexDirection="column"
            minH={['90vh', '90vh', isOpen ? '88vh' : '100vh']}
            justifyContent="center"
            alignItems="center"
          >
            <MotionBox
              layout
              pos="relative"
              w="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              height="auto"
              pt={[0, 0, 0]}
              mb={['64px', '64px', '64px', '160px']}
              mt={['98px', '114px', '114px']}
            >
              <motion.div
                initial={{ y: '120px', scale: 1.15, opacity: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.72, 0, 0.12, 1],
                }}
                className="flex flex-col lg:flex-row w-full font-hero max-w-[1192px] px-[24px] lg:px-0 mb-[64px] lg:mb-20 lg:p-0 items-start lg:items-end justify-between"
              >
                <div>
                  <h1 className="max-w-[500px] font-black text-primary w-full lg:max-w-full text-[54px] leading-[64px] lg:text-[72px] lg:leading-[80px]">
                    Customer analytics for <br className="hidden lg:block" />
                    product teams
                  </h1>
                  <p className="max-w-[500px] lg:max-w-full mt-[12px] lg:mt-[24px] text-primary lg:font-medium text-[18px] leading-[28px] lg:text-[24px] lg:leading-[32px] max-w-[700px] text-left">
                    June is the simple way to know who your users are, what <br className="hidden lg:block" />
                    features they like, or where they're stuck.
                  </p>
                </div>

                <a
                  className={`relative h-16 w-[227px] border border-[3px] border-primary min-w-[227px] mt-8 bg-primary text-white rounded-[20px] text-[20px] leading-[24px] font-semibold hover:scale-110 ease-in-out duration-300`}
                  href={`${process.env.JUNE_APP_HOST}/start`}
                  rel="noreferrer noopener"
                  id="primary-cta"
                >
                  <div className="absolute top-[17px] left-[37px]">Get started</div>
                  <img className={`absolute top-[9px] right-[21px]`} src="/right-arrow-circle.svg" alt="Arrow" />
                </a>
              </motion.div>

              <div className="relative flex flex-col items-center block w-full">
                <HeroAnimation selectedFolder={selectedFolder} animateHero={animateHero} onEnded={onEnded} />
              </div>
            </MotionBox>
          </MotionFlex>
        </div>
      </div>
    </>
  );
}
