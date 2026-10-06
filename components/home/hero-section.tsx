import Image from 'next/image';
import { Box, Flex, Progress } from '@chakra-ui/react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

// Add playerjs types
declare global {
  interface Window {
    playerjs: any;
  }
}

type VideoFeature = {
  time: string;
  title: string;
  description: string;
  seconds: number; // Add seconds for easier seeking
};

const features: VideoFeature[] = [
  {
    time: '0:00',
    title: 'Customer dashboards',
    description: "Understand your customers' product usage",
    seconds: 0,
  },
  {
    time: '0:40',
    title: 'CRM sync',
    description: 'Make your CRM work for your Success team',
    seconds: 40,
  },
  {
    time: '0:55',
    title: 'Share metrics',
    description: 'Prove ROI by sharing metrics with customers',
    seconds: 55,
  },
];

export function HeroSection() {
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [displayTime, setDisplayTime] = useState('0:00');
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [selectedTimestampIndex, setSelectedTimestampIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Initialize playerjs with proper error handling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loadPlayerScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.playerjs) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load player.js'));
        document.head.appendChild(script);
      });
    };

    const initializePlayer = async () => {
      try {
        await loadPlayerScript();

        if (!iframeRef.current) {
          console.error('Iframe ref not available');
          return;
        }

        // Add timestamp to iframe src to ensure uniqueness
        const timestamp = Date.now();
        const currentSrc = iframeRef.current.src;
        if (!currentSrc.includes('?t=')) {
          iframeRef.current.src = `${currentSrc}&t=${timestamp}`;
        }

        // Wait for iframe to load
        await new Promise<void>((resolve) => {
          const checkIframeLoad = () => {
            if (iframeRef.current?.contentWindow) {
              resolve();
            } else {
              timeoutId = setTimeout(checkIframeLoad, 100);
            }
          };
          checkIframeLoad();
        });

        const player = new window.playerjs.Player(iframeRef.current);
        playerRef.current = player;

        // Set up ready event
        player.on('ready', () => {
          setIsPlayerReady(true);
          setIsPlayerLoaded(true);

          // Get initial duration
          player.getDuration((duration: number) => {
            setTotalDuration(duration);
          });

          // Set initial mute state
          if (player.supports('method', 'mute')) {
            player.mute();
            setIsMuted(true);
          }

          // Start playback
          if (player.supports('method', 'play')) {
            player.play();
          }
        });

        // Set up event listeners
        player.on('play', () => {
          setIsPlaying(true);
        });

        player.on('pause', () => {
          setIsPlaying(false);
        });

        player.on('timeupdate', (data: { seconds: number; duration: number }) => {
          const videoCurrentTime = data.seconds;
          const videoDuration = data.duration;

          setCurrentTime(videoCurrentTime);
          setDisplayTime(formatTime(videoCurrentTime));

          // Update progress bar
          if (videoDuration && videoDuration > 0) {
            const progressPercent = (videoCurrentTime / videoDuration) * 100;
            setProgress(progressPercent);
          }

          // Update selected feature based on current video time
          let newSelectedIdx = 0;
          for (let i = features.length - 1; i >= 0; i--) {
            if (features[i].seconds <= videoCurrentTime) {
              newSelectedIdx = i;
              break;
            }
          }
          setSelectedTimestampIndex(newSelectedIdx);
        });

        player.on('seeked', () => {
          console.log('Video seeked successfully');
        });

        player.on('error', (error: any) => {
          console.error('Player error:', error);
        });

        player.on('ended', () => {
          console.log('Video ended');
          setIsPlaying(false);
        });
      } catch (error) {
        console.error('Failed to initialize player:', error);
      }
    };

    initializePlayer();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (playerRef.current) {
        try {
          playerRef.current.off('ready');
          playerRef.current.off('play');
          playerRef.current.off('pause');
          playerRef.current.off('timeupdate');
          playerRef.current.off('seeked');
          playerRef.current.off('error');
          playerRef.current.off('ended');
        } catch (error) {
          console.error('Error cleaning up player:', error);
        }
        playerRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current || !isPlayerReady) return;

    try {
      if (isMuted) {
        if (playerRef.current.supports('method', 'unmute')) {
          playerRef.current.unmute();
          setIsMuted(false);
        }
      } else {
        if (playerRef.current.supports('method', 'mute')) {
          playerRef.current.mute();
          setIsMuted(true);
        }
      }
    } catch (error) {
      console.error('Error toggling mute:', error);
    }
  };

  const seekToTime = (seconds: number) => {
    if (!playerRef.current || !isPlayerReady) {
      console.warn('Player not ready for seeking');
      return;
    }

    try {
      if (playerRef.current.supports('method', 'setCurrentTime')) {
        playerRef.current.setCurrentTime(seconds);

        setTimeout(() => {
          if (playerRef.current && playerRef.current.supports('method', 'play') && !isPlaying) {
            playerRef.current.play();
          }
        }, 200);
      } else {
        console.warn('setCurrentTime method not supported');
      }
    } catch (error) {
      console.error('Error seeking video:', error);
    }
  };

  const handleTimeClick = (timeString: string, index: number) => {
    const seconds = features[index].seconds;
    setSelectedTimestampIndex(index);
    seekToTime(seconds);

    // Close mobile dropdown if open
    if (isMobileDropdownOpen) {
      setIsMobileDropdownOpen(false);
    }
  };

  const handleMobileTimeClick = (timeString: string, index: number) => {
    // First close the dropdown
    setIsMobileDropdownOpen(false);

    // Then seek to the time with a small delay to ensure dropdown closes first
    setTimeout(() => {
      const seconds = features[index].seconds;
      setSelectedTimestampIndex(index);
      seekToTime(seconds);
    }, 100);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !playerRef.current || !isPlayerReady || totalDuration === 0) return;

    try {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
      const time = (percentage / 100) * totalDuration;

      seekToTime(time);
      setProgress(percentage);
    } catch (error) {
      console.error('Error handling progress bar click:', error);
    }
  };

  const handleProgressBarDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !progressBarRef.current || !playerRef.current || !isPlayerReady || totalDuration === 0) return;

    try {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      const time = (percentage / 100) * totalDuration;

      seekToTime(time);
      setProgress(percentage);
    } catch (error) {
      console.error('Error handling progress bar drag:', error);
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <>
      <div className="flex flex-col items-center w-full mt-20 px-3 md:px-6 xl:px-0 md:mt-[120px]">
        <div className="w-full flex justify-start max-w-[1192px]">
          <h1 className="hidden lg:block font-hero font-black text-[40px] md:text-[64px] text-[#0D131B] max-w-[1192px] tracking-normal leading-[48px] md:leading-[84px]">
            Product Analytics for{' '}
            <span className="bg-[#F9E2FB] text-[#560159] pl-2 rounded-l-md whitespace-nowrap"> Customer </span>
            <span className="bg-[#F9E2FB] text-[#560159] pr-2 rounded-r-md"> Success</span> and{' '}
            <span className="bg-[#C9F0FF] text-[#003d5a] px-2 rounded-md whitespace-nowrap"> Account Management </span>
          </h1>
          <span className="block lg:hidden font-hero font-black text-[32px] tracking-normal leading-[40px]">
            Product Analytics for{' '}
            <span className="bg-[#F9E2FB] text-[#560159] pl-2 rounded-l-md whitespace-nowrap"> Customer </span>
            <span className="bg-[#F9E2FB] text-[#560159] pr-2 rounded-r-md"> Success</span> &{' '}
            <span className="bg-[#C9F0FF] text-[#003d5a] px-2 rounded-md whitespace-nowrap"> Account Management </span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-12 max-w-[1192px] justify-between">
          <div className="hidden md:flex">
            <a
              className={clsx(
                'cursor-pointer px-[30px] md:px-10 py-[15px] md:py-5 ml-4 md:ml-6 justify-start text-white text-2xl leading-[24px] md:leading-[32px] font-bold font-hero -tracking-[0.037em]',
                'bg-[#6868F7] rounded-3xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_2px_3px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.12),inset_0px_-3px_2px_0px_rgba(6,54,109,0.40),inset_0px_2px_0.4000000059604645px_0px_rgba(255,255,255,0.14)]',
                'hover:bg-[#5353c6] hover:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_2px_3px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.12),inset_0px_-3px_2px_0px_rgba(6,54,109,0.40),inset_0px_2px_0.4000000059604645px_0px_rgba(255,255,255,0.14)]',
                'transition-all duration-200 ease-in-out',
                'h-[54px] md:h-[72px] whitespace-nowrap',
              )}
              href="https://analytics.june.so/start"
              rel="noreferrer noopener"
              target="_blank"
              id="primary-cta"
            >
              Get started
            </a>
          </div>
          <div className="flex md:hidden">
            <a
              className={clsx(
                'cursor-pointer px-[30px] py-[15px] ml-4 md:ml-6 justify-start text-white text-[18px] leading-6 font-bold font-hero -tracking-[0.037em]',
                'bg-[#6868F7] rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_2px_3px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.12),inset_0px_-3px_2px_0px_rgba(6,54,109,0.40),inset_0px_2px_0.4000000059604645px_0px_rgba(255,255,255,0.14)]',
                'hover:bg-[#5353c6] hover:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_2px_3px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.12),inset_0px_-3px_2px_0px_rgba(6,54,109,0.40),inset_0px_2px_0.4000000059604645px_0px_rgba(255,255,255,0.14)]',
                'transition-all duration-200 ease-in-out',
              )}
              href="https://analytics.june.so/start"
              rel="noreferrer noopener"
              target="_blank"
              id="primary-cta"
            >
              Get started
            </a>
          </div>
          <div className="h-[72px] grid place-content-start md:place-content-center">
            <div className="lg:w-[450.50px] h-10 flex flex-col lg:flex-row whitespace-nowrap gap-3 lg:gap-6 mt-12 md:mt-0">
              <div className="grid place-content-start lg:place-content-center">
                <div className="text-right justify-start text-[#adb5bd] text-[18px] leading-[24px] lg:text-xl font-medium font-hero">
                  Integrated with
                </div>
              </div>
              <div className="flex gap-6">
                <div className="grid place-content-center">
                  <img
                    alt="hubspot logo"
                    className="h-[24px] w-[84px] md:h-[24px] md:w-auto"
                    src="/home/hero/hubspot.svg"
                  />
                </div>
                <div className="grid place-content-center">
                  <img
                    alt="attio logo"
                    className="h-[32px] w-[80px] md:h-[32px] md:w-auto"
                    src="/home/hero/attio.svg"
                  />
                </div>
                <div className="grid place-content-center">
                  <img
                    alt="salesforce logo"
                    className="h-[40px] w-[57.5px] md:h-[40px] md:w-auto"
                    src="/home/hero/salesforce.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex max-w-[1192px] gap-4 mt-[120px] flex-col lg:flex-row">
          <div className="flex flex-col">
            <h1 className="font-hero font-black text-[32px] leading-10 pl-0 md:pl-6 text-[#0D131B]">
              What June does really well
            </h1>
            {/* Feature list */}
            <div className="mt-6 gap-2 hidden md:block">
              {features.map((feature, index) => {
                const isCurrentlySelected = selectedTimestampIndex === index;
                return (
                  <div
                    key={index}
                    className={clsx(
                      'cursor-pointer hover:bg-[#F1F3F5] border hover:border border-[#FAFAFA] hover:border-[#F1F3F5] box-border hover:opacity-80 transition-all duration-200 ease-in-out w-[353px] h-[76px] py-4 pl-6 rounded-2xl',
                      isCurrentlySelected
                        ? '!bg-white shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)] outline-[#f8f9fa]'
                        : '',
                    )}
                    onClick={() => handleTimeClick(feature.time, index)}
                  >
                    <div className="flex items-center overflow-hidden">
                      <span className={clsx('font-bold text-base leading-[19px] text-[#ADB5BD]')}>{feature.time}</span>
                      <span
                        className={clsx(
                          'ml-2 font-bold text-base leading-[19px] -tracking-[0.037em]',
                          isCurrentlySelected ? 'text-[#6868F7]' : 'text-[#0D131B]',
                        )}
                      >
                        {feature.title}
                      </span>
                    </div>
                    <div className="font-normal text-base mt-[6px] leading-[19px] -tracking-[0.037em] text-[#0D131B]">
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Custom Animated Dropdown for Mobile */}
          <div className="mt-6 md:hidden w-full relative">
            {/* Trigger: Displays the currently selected feature */}
            <div
              className={clsx(
                'cursor-pointer transition-colors duration-200 ease-in-out w-full h-auto py-4 px-6 box-border flex justify-between items-center',
                'bg-white', // Base background
                isMobileDropdownOpen
                  ? 'rounded-t-2xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25)]' // Shadow only on top when open
                  : 'rounded-2xl shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)]', // Full shadow when closed
              )}
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <div className="flex-grow">
                <div className="flex items-center overflow-hidden">
                  <span className="font-bold text-base leading-[19px] text-[#ADB5BD]">
                    {features[selectedTimestampIndex].time}
                  </span>
                  <span className="ml-2 font-bold text-base leading-[19px] -tracking-[0.037em] text-[#6868F7]">
                    {features[selectedTimestampIndex].title}
                  </span>
                </div>
                <div className="font-normal text-base mt-[6px] leading-[19px] -tracking-[0.037em] text-[#0D131B]">
                  {features[selectedTimestampIndex].description}
                </div>
              </div>
              {/* Animated Chevron Icon */}
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={chevronVariants}
                animate={isMobileDropdownOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7797 6.22007C11.9201 6.3607 11.999 6.55132 11.999 6.75007C11.999 6.94882 11.9201 7.13945 11.7797 7.28007L8.52968 10.5301C8.38906 10.6705 8.19843 10.7494 7.99968 10.7494C7.80093 10.7494 7.61031 10.6705 7.46968 10.5301L4.21968 7.28007C4.0872 7.1379 4.01508 6.94985 4.01851 6.75555C4.02194 6.56125 4.10065 6.37586 4.23806 6.23845C4.37547 6.10104 4.56086 6.02233 4.75516 6.0189C4.94946 6.01547 5.13751 6.08759 5.27968 6.22007L7.99968 8.94007L10.7197 6.22007C10.8603 6.07962 11.0509 6.00073 11.2497 6.00073C11.4484 6.00073 11.6391 6.07962 11.7797 6.22007Z"
                  fill="#0D131B"
                />
              </motion.svg>
            </div>

            {/* Dropdown List with Animation */}
            <AnimatePresence>
              {isMobileDropdownOpen && (
                <motion.div
                  key="mobile-dropdown-list"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl z-50 overflow-hidden border-x border-b border-gray-200"
                  style={{ transformOrigin: 'top' }}
                >
                  {features.map((feature, index) => {
                    const isCurrentlySelectedInDropdown = selectedTimestampIndex === index;
                    return (
                      <div
                        key={`mobile-dropdown-item-${index}`}
                        className={clsx(
                          'cursor-pointer hover:bg-gray-50 transition-colors duration-150 ease-in-out w-full h-auto py-4 px-6 box-border relative',
                          isCurrentlySelectedInDropdown ? 'bg-gray-100' : '',
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleMobileTimeClick(feature.time, index);
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleMobileTimeClick(feature.time, index);
                        }}
                      >
                        <div className="flex items-center overflow-hidden">
                          <span className={clsx('font-bold text-base leading-[19px]', 'text-[#ADB5BD]')}>
                            {feature.time}
                          </span>
                          <span
                            className={clsx(
                              'ml-2 font-bold text-base leading-[19px] -tracking-[0.037em]',
                              isCurrentlySelectedInDropdown ? 'text-[#6868F7]' : 'text-[#0D131B]',
                            )}
                          >
                            {feature.title}
                          </span>
                        </div>
                        <div className="font-normal text-base mt-[6px] leading-[19px] -tracking-[0.037em] text-[#0D131B]">
                          {feature.description}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Box className="w-full aspect-video lg:aspect-auto lg:h-[463px] bg-grayswhite rounded-3xl overflow-hidden shadow-[0px_0px_1px_0px_rgba(13,19,27,0.25),_0px_2px_1px_0px_rgba(13,19,27,0.05)] relative">
            <Box className="p-0 h-full flex flex-col justify-between relative">
              <iframe
                ref={iframeRef}
                className="w-full h-full object-cover"
                src="https://iframe.mediadelivery.net/embed/431810/7ff18d26-bee9-406a-aa57-bb738611850d?autoplay=true&loop=false&preload=true&responsive=true&controls=false&api=1"
                style={{ border: 0 }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
