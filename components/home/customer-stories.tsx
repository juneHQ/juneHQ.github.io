import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CustomerCard, type Company } from './customer-card';

const companies: Company[] = [
  {
    name: 'Range',
    feedBack: 'HOLY MOTHER OF GOD! This is awesome, thank you.',
    customer: 'Jason', 
    position: 'Co-founder at Range',
    avatarSrc: '/home/customer-stories/customers/jason-range.jpg',
    logoSrc: '/customer-stories/company-logos/range.png',
  },
  {
    name: 'Visibuild',
    feedBack: "This mighty team of 7 has been consistently building a product that genuinely aligns with our Success Team's needs, enabling us to better support our customers' success journey",
    customer: 'Abby',
    position: 'Software Engineer at Visibuild',
    avatarSrc: '/home/customer-stories/customers/abby-visibuild.jpg',
    logoSrc: '/customer-stories/company-logos/visibuild.png',
  },
  {
    name: 'Searchland',
    feedBack:
      "I have recently started to use June properly, and it's a fantastic tool!",
    customer: 'Hugh',
    position: 'Co-founder at Searchland',
    avatarSrc: '/home/customer-stories/customers/hugh-searchland.jpg',
    logoSrc: '/customer-stories/company-logos/searchland.svg',
  },
  {
    name: 'PlayerZero',
    feedBack:
      "June has been great. We're whipping up a killer CS and Support motion with it.",
    customer: 'Matt',
    position: 'Customer Success Lead at PlayerZero',
    avatarSrc: '/home/customer-stories/customers/matt-playerzero.jpg',
    logoSrc: '/customer-stories/company-logos/playerzero.png',
  },
  {
    name: 'Ahead',
    feedBack:
      "You guys are building something really valuable, and a joy to use too.",
    customer: 'Alexander',
    position: 'Software Engineer at Ahead',
    avatarSrc: '/home/customer-stories/customers/alexander-ahead.jpg',
    logoSrc: '/customer-stories/company-logos/ahead.svg',
  },
];

const CustomerStoriesDesktop = () => {
  const CARD_WIDTH = 720; // Updated to match new card width
  const GAP_WIDTH = 80; // Corresponds to Tailwind's gap-20 (5rem * 16px/rem)
  const ITEM_TOTAL_WIDTH = CARD_WIDTH + GAP_WIDTH;
  const PAUSE_DURATION_MS = 5000;
  const SCROLL_ANIMATION_DURATION_MS = 500; // Approximate time for smooth scroll to finish

  const [targetPhysicalIndex, setTargetPhysicalIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false); // True if user is hovering or clicked
  const [isResettingScroll, setIsResettingScroll] = useState(false); // True during loop's instant scroll reset

  const viewportRef = useRef<HTMLDivElement>(null);
  const advanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionEndTimerRef = useRef<NodeJS.Timeout | null>(null);

  const numOriginalCompanies = companies.length;
  const tripledCompanies = useMemo(() => [...companies, ...companies, ...companies], []); // Use triple for smoother end-to-start loop with peeking

  const [screenWidth, setScreenWidth] = useState<number>(() => {
    // Initialize with window.innerWidth if available, otherwise a default
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1920; // Default for SSR or if window is not defined initially
  });

  // Update screenWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      // Set initial width on client-side mount as well
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const VIEWPORT_WIDTH = screenWidth;
  const PEEKING_WIDTH = useMemo(() => Math.max(0, (screenWidth - CARD_WIDTH) / 2), [screenWidth]);

  // Calculate scrollLeft to center the card at physicalIndex
  const calculateScrollLeft = useCallback((physicalIdx: number) => {
    // The scrollLeft is such that the target card's left edge is at PEEKING_WIDTH from the viewport's left.
    // Each item (card + gap) takes ITEM_TOTAL_WIDTH.
    // The slider has paddingLeft = PEEKING_WIDTH.
    // So, to center card `physicalIdx`, its content starts at `physicalIdx * ITEM_TOTAL_WIDTH` from the slider's content start.
    return physicalIdx * ITEM_TOTAL_WIDTH;
  }, []);

  // Effect for scrolling and handling loop reset
  useEffect(() => {
    if (!viewportRef.current) return;
    const viewport = viewportRef.current;

    if (isResettingScroll) {
      // Instant scroll for loop reset
      const scrollPos = calculateScrollLeft(targetPhysicalIndex);
      viewport.scrollLeft = scrollPos;
      setIsResettingScroll(false); // Reset flag after instant scroll
      return;
    }

    const targetScroll = calculateScrollLeft(targetPhysicalIndex);
    viewport.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });

    // Loop reset logic: if targetPhysicalIndex is in the last third (meant for looping)
    // and we've scrolled there, prepare to jump back.
    const scrollEndTimeout = setTimeout(() => {
      if (targetPhysicalIndex >= numOriginalCompanies * 2) {
        const newLogicalIndex = targetPhysicalIndex % numOriginalCompanies;
        // The actual physical index to jump to in the *second* set of companies for seamless loop
        const newPhysicalResetIndex = newLogicalIndex + numOriginalCompanies;
        setTargetPhysicalIndex(newPhysicalResetIndex);
        setIsResettingScroll(true); // This will trigger the instant scroll in the next effect run
      }
    }, SCROLL_ANIMATION_DURATION_MS); // Wait for smooth scroll to finish

    return () => clearTimeout(scrollEndTimeout);
  }, [targetPhysicalIndex, calculateScrollLeft, numOriginalCompanies, isResettingScroll]);

  // Effect for auto-advancing the carousel
  useEffect(() => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (isInteracting || isResettingScroll) return; // Don't advance if user is interacting or during reset

    advanceTimerRef.current = setTimeout(() => {
      setTargetPhysicalIndex((prev) => prev + 1);
    }, PAUSE_DURATION_MS);

    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, [targetPhysicalIndex, isInteracting, isResettingScroll]);

  const handleCardClick = (clickedCardPhysicalIndex: number) => {
    if (interactionEndTimerRef.current) clearTimeout(interactionEndTimerRef.current);

    setIsInteracting(true);
    setTargetPhysicalIndex(clickedCardPhysicalIndex);

    // After a click, pause auto-advance for PAUSE_DURATION_MS, then resume
    interactionEndTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, PAUSE_DURATION_MS);
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current); // Clear auto-advance timer
  };

  const handleMouseLeave = () => {
    setIsInteracting(false); // Auto-advance will resume due to useEffect dependency change
  };

  const handlePrevClick = () => {
    if (interactionEndTimerRef.current) clearTimeout(interactionEndTimerRef.current);
    
    setIsInteracting(true);
    setTargetPhysicalIndex((prev) => {
      // If we're at the beginning of the second set, wrap to the end of the second set
      if (prev <= numOriginalCompanies) {
        return numOriginalCompanies * 2 - 1;
      }
      return prev - 1;
    });

    // After a click, pause auto-advance for PAUSE_DURATION_MS, then resume
    interactionEndTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, PAUSE_DURATION_MS);
  };

  const handleNextClick = () => {
    if (interactionEndTimerRef.current) clearTimeout(interactionEndTimerRef.current);
    
    setIsInteracting(true);
    setTargetPhysicalIndex((prev) => prev + 1);

    // After a click, pause auto-advance for PAUSE_DURATION_MS, then resume
    interactionEndTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, PAUSE_DURATION_MS);
  };

  // Set initial target to be in the second block of companies for smoother start
  useEffect(() => {
    setTargetPhysicalIndex(numOriginalCompanies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mt-[202px] items-center font-hero text-primary relative">
      <div className="text-[24px] leading-[34px] lg:text-[64px] lg:leading-[76px] font-black font-hero text-center">
        <h2>Loved by B2B SaaS</h2>
      </div>
      <div className="relative">
        <div
          ref={viewportRef}
          className="overflow-x-auto hide-scrollbar relative mt-10"
          style={{ width: `${VIEWPORT_WIDTH}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex items-center h-[288px]" // `items-center` for vertical alignment if cards have different dynamic heights
            style={{
              // Total width will be (num cards * card width) + ((num cards -1) * gap) + padding
              // The `tripledCompanies.length * ITEM_TOTAL_WIDTH` should be enough
              // paddingLeft and paddingRight allow the first/last "real" items to be centered
              paddingLeft: `${PEEKING_WIDTH}px`,
              paddingRight: `${PEEKING_WIDTH}px`,
              gap: `${GAP_WIDTH}px`,
            }}
          >
            {tripledCompanies.map((company, index) => (
              <CustomerCard
                key={`card-${company.name}-${index}`} // More robust key
                company={company}
                onClick={() => handleCardClick(index)}
                isActive={index === targetPhysicalIndex}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4 flex gap-4 justify-center items-center'>
        <div className='cursor-pointer svg-hover-control'
          onClick={handlePrevClick}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4.5C13.23 4.5 4.5 13.23 4.5 24C4.5 34.77 13.23 43.5 24 43.5C34.77 43.5 43.5 34.77 43.5 24C43.5 13.23 34.77 4.5 24 4.5ZM15.44 22.94C15.1591 23.2213 15.0013 23.6025 15.0013 24C15.0013 24.3975 15.1591 24.7787 15.44 25.06L21.44 31.06C21.5773 31.2074 21.7429 31.3256 21.9269 31.4076C22.1109 31.4895 22.3095 31.5336 22.511 31.5372C22.7124 31.5407 22.9124 31.5037 23.0992 31.4282C23.286 31.3528 23.4556 31.2405 23.5981 31.0981C23.7405 30.9556 23.8528 30.786 23.9282 30.5992C24.0037 30.4124 24.0407 30.2124 24.0372 30.011C24.0336 29.8095 23.9895 29.6109 23.9076 29.4269C23.8256 29.2429 23.7074 29.0773 23.56 28.94L20.12 25.5H31.5C31.8978 25.5 32.2794 25.342 32.5607 25.0607C32.842 24.7794 33 24.3978 33 24C33 23.6022 32.842 23.2206 32.5607 22.9393C32.2794 22.658 31.8978 22.5 31.5 22.5H20.12L23.56 19.06C23.825 18.7757 23.9692 18.3996 23.9624 18.011C23.9555 17.6224 23.7981 17.2516 23.5232 16.9768C23.2484 16.7019 22.8776 16.5445 22.489 16.5376C22.1004 16.5308 21.7243 16.675 21.44 16.94L15.44 22.94Z" fill="#0D131B"/>
            </g>
          </svg>

        </div>
        <div className='cursor-pointer svg-hover-control'
          onClick={handleNextClick}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 43.5C34.77 43.5 43.5 34.77 43.5 24C43.5 13.23 34.77 4.5 24 4.5C13.23 4.5 4.5 13.23 4.5 24C4.5 34.77 13.23 43.5 24 43.5ZM32.56 25.06C32.8409 24.7788 32.9987 24.3975 32.9987 24C32.9987 23.6025 32.8409 23.2213 32.56 22.94L26.56 16.94C26.4227 16.7926 26.2571 16.6744 26.0731 16.5924C25.8891 16.5105 25.6904 16.4664 25.489 16.4628C25.2876 16.4593 25.0876 16.4963 24.9008 16.5718C24.714 16.6472 24.5444 16.7595 24.4019 16.9019C24.2595 17.0444 24.1472 17.214 24.0718 17.4008C23.9963 17.5876 23.9593 17.7876 23.9628 17.989C23.9664 18.1905 24.0105 18.3891 24.0924 18.5731C24.1744 18.7571 24.2926 18.9227 24.44 19.06L27.88 22.5L16.5 22.5C16.1022 22.5 15.7206 22.658 15.4393 22.9393C15.158 23.2206 15 23.6022 15 24C15 24.3978 15.158 24.7794 15.4393 25.0607C15.7206 25.342 16.1022 25.5 16.5 25.5L27.88 25.5L24.44 28.94C24.175 29.2244 24.0308 29.6004 24.0376 29.989C24.0445 30.3776 24.2019 30.7484 24.4768 31.0232C24.7516 31.2981 25.1224 31.4555 25.511 31.4624C25.8996 31.4692 26.2756 31.325 26.56 31.06L32.56 25.06Z" fill="#0D131B"/>
            </g>
          </svg>
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .svg-hover-control:hover g {
          opacity: 0.2 !important; /* Use !important if necessary to override inline opacity */
        }
        .svg-hover-control g {
          transition: opacity 0.2s ease-in-out; /* Optional: for smooth transition */
        }
      `}</style>
    </div>
  );
};

export const CustomerStoriesMobile = () => {
  const CARD_WIDTH = 322;
  const GAP_WIDTH = 24; // Corresponds to Tailwind's gap-20 (5rem * 16px/rem)
  const ITEM_TOTAL_WIDTH = CARD_WIDTH + GAP_WIDTH;
  const PAUSE_DURATION_MS = 5000;
  const SCROLL_ANIMATION_DURATION_MS = 500; // Approximate time for smooth scroll to finish

  const [targetPhysicalIndex, setTargetPhysicalIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false); // True if user is hovering or clicked
  const [isResettingScroll, setIsResettingScroll] = useState(false); // True during loop's instant scroll reset

  const viewportRef = useRef<HTMLDivElement>(null);
  const advanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionEndTimerRef = useRef<NodeJS.Timeout | null>(null);

  const numOriginalCompanies = companies.length;
  const tripledCompanies = useMemo(() => [...companies, ...companies, ...companies], []); // Use triple for smoother end-to-start loop with peeking

  const [screenWidth, setScreenWidth] = useState<number>(() => {
    // Initialize with window.innerWidth if available, otherwise a default
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 402; // Default for SSR or if window is not defined initially
  });

  // Update screenWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      // Set initial width on client-side mount as well
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const VIEWPORT_WIDTH = screenWidth;
  const PEEKING_WIDTH = useMemo(() => Math.max(0, (screenWidth - CARD_WIDTH) / 2), [screenWidth]);

  // Calculate scrollLeft to center the card at physicalIndex
  const calculateScrollLeft = useCallback((physicalIdx: number) => {
    // The scrollLeft is such that the target card's left edge is at PEEKING_WIDTH from the viewport's left.
    // Each item (card + gap) takes ITEM_TOTAL_WIDTH.
    // The slider has paddingLeft = PEEKING_WIDTH.
    // So, to center card `physicalIdx`, its content starts at `physicalIdx * ITEM_TOTAL_WIDTH` from the slider's content start.
    return physicalIdx * ITEM_TOTAL_WIDTH;
  }, []);

  // Effect for scrolling and handling loop reset
  useEffect(() => {
    if (!viewportRef.current) return;
    const viewport = viewportRef.current;

    if (isResettingScroll) {
      // Instant scroll for loop reset
      const scrollPos = calculateScrollLeft(targetPhysicalIndex);
      viewport.scrollLeft = scrollPos;
      setIsResettingScroll(false); // Reset flag after instant scroll
      return;
    }

    const targetScroll = calculateScrollLeft(targetPhysicalIndex);
    viewport.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });

    // Loop reset logic: if targetPhysicalIndex is in the last third (meant for looping)
    // and we've scrolled there, prepare to jump back.
    const scrollEndTimeout = setTimeout(() => {
      if (targetPhysicalIndex >= numOriginalCompanies * 2) {
        const newLogicalIndex = targetPhysicalIndex % numOriginalCompanies;
        // The actual physical index to jump to in the *second* set of companies for seamless loop
        const newPhysicalResetIndex = newLogicalIndex + numOriginalCompanies;
        setTargetPhysicalIndex(newPhysicalResetIndex);
        setIsResettingScroll(true); // This will trigger the instant scroll in the next effect run
      }
    }, SCROLL_ANIMATION_DURATION_MS); // Wait for smooth scroll to finish

    return () => clearTimeout(scrollEndTimeout);
  }, [targetPhysicalIndex, calculateScrollLeft, numOriginalCompanies, isResettingScroll]);

  // Effect for auto-advancing the carousel
  useEffect(() => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (isInteracting || isResettingScroll) return; // Don't advance if user is interacting or during reset

    advanceTimerRef.current = setTimeout(() => {
      setTargetPhysicalIndex((prev) => prev + 1);
    }, PAUSE_DURATION_MS);

    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, [targetPhysicalIndex, isInteracting, isResettingScroll]);

  const handleCardClick = (clickedCardPhysicalIndex: number) => {
    if (interactionEndTimerRef.current) clearTimeout(interactionEndTimerRef.current);

    setIsInteracting(true);
    setTargetPhysicalIndex(clickedCardPhysicalIndex);

    // After a click, pause auto-advance for PAUSE_DURATION_MS, then resume
    interactionEndTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, PAUSE_DURATION_MS);
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current); // Clear auto-advance timer
  };

  const handleMouseLeave = () => {
    setIsInteracting(false); // Auto-advance will resume due to useEffect dependency change
  };

  // Set initial target to be in the second block of companies for smoother start
  useEffect(() => {
    setTargetPhysicalIndex(numOriginalCompanies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mt-20 text-[#0D131B] font-hero">
      <div className="text-[32px] leading-[40px] tracking-normal font-black text-center">Loved by B2B SaaS</div>
      <div
        ref={viewportRef}
        className="overflow-x-auto hide-scrollbar relative mt-10"
        style={{ width: `${VIEWPORT_WIDTH}px` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-center" // `items-center` for vertical alignment if cards have different dynamic heights
          style={{
            // Total width will be (num cards * card width) + ((num cards -1) * gap) + padding
            // The `tripledCompanies.length * ITEM_TOTAL_WIDTH` should be enough
            // paddingLeft and paddingRight allow the first/last "real" items to be centered
            paddingLeft: `${PEEKING_WIDTH}px`,
            paddingRight: `${PEEKING_WIDTH}px`,
            gap: `${GAP_WIDTH}px`,
          }}
        >
          {tripledCompanies.map((company, index) => (
            <CustomerCard
              key={`card-${company.name}-${index}`} // More robust key
              company={company}
              onClick={() => handleCardClick(index)}
              isActive={index === targetPhysicalIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CustomerStories = () => {
  return (
    <>
      <div className="hidden lg:block">
        <CustomerStoriesDesktop />
      </div>
      <div className="block lg:hidden">
        <CustomerStoriesMobile />
      </div>
    </>
  );
};
