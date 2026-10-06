import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { classNames } from 'lib/utils';
import conversations from 'lib/conversations';
import { motion, useAnimation } from 'framer-motion';
import useScreenSize from 'components/core/utils/hooks/useScreenSize';
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { WhatsappBubble } from './whatsapp-bubble';

export const WhatsappSection = ({ scrollableDivRef }) => {
  const screenSize = useScreenSize();
  const [showLeftPanel, setShowLeftPanel] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const [animateHero, setAnimateHero] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

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

  const controls = useAnimation();
  useEffect(() => {
    // Trigger a spring animation whenever the src changes
    controls.start({
      scale: [0.5, 1.1, 1], // Scale up and then back down
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    });
  }, [selectedConversation.id, controls]); // Depend on the selectedConversation.id if it's the determinant for src change

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollableDivRef.current) return;

      // Calculate the total scrollable distance
      const scrollTop = scrollableDivRef.current.scrollTop;
      const viewportHeight = window.innerHeight; // Use the viewport height as the baseline for calculations

      // Calculate the scroll percentage relative to the viewport height
      let scrollPercentage = (scrollTop / viewportHeight) * 100;

      // Map the scroll percentage to opacity
      let newOpacity = 0;
      if (scrollPercentage >= 15 && scrollPercentage <= 30) {
        // Scale the opacity to change from 0 to 1 as the scroll goes from 15% to 30% of the viewport height
        newOpacity = (scrollPercentage - 15) / (30 - 15);
      } else if (scrollPercentage > 30) {
        newOpacity = 1;
      }

      controls.start({ opacity: newOpacity });
    };

    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollableDivRef, controls]);
  return (
    <div className="font-hero relative">
      <div className="relative flex justify-center w-full mb-12 z-10">
        <motion.div
          initial={{ width: '100%' }}
          animate={animateHero ? { width: '1192px', height: '100%' } : { width: '100%', height: '100%' }}
          transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}
          className={`relative flex justify-center min-h-[700px] ${
            animateHero ? 'rounded-[20px] rounded-tr-[0px] lg:rounded-[30px] lg:rounded-tr-[0px]' : ''
          }-z-10 left-0`}
        >
          {/* Appear */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.72, 0, 0.12, 1] }}
          ></motion.div>
          <motion.div
            initial={{ scale: 0.3, transformOrigin: 'bottom' }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
          >
            <motion.div
              initial={{ padding: 0, top: '-48px' }}
              animate={animateHero ? { padding: '8px', top: '-4px' } : { padding: '0px', top: '-48px' }}
              transition={{ duration: 1, ease: [0.72, 0, 0.12, 1] }}
              className={`relative w-screen h-full lg:w-[1192px] lg:h-[980px]`}
            >
              <div className="px-[8px] lg:px-0 h-full w-full">
                <div className="relative flex flex-col w-full h-full rounded-[12px] lg:rounded-[20px] shadow-[0_2px_8px_rgba(13,19,27,0.25)] overflow-hidden">
                  <div className="relative w-full h-full origin-left scale-x-[1.002] flex">
                    <motion.div
                      className="absolute lg:relative left-0 top-0 w-[300px] border-r-[1px] border-gray-200 z-20 bg-white h-full flex flex-col"
                      initial={{ x: screenSize.lg ? '0%' : '100%' }} // Start completely offscreen to the right
                      animate={{ x: screenSize.lg ? '0%' : showLeftPanel ? '0%' : '-100%' }} // Move into view or back out
                      transition={{ type: 'ease-in-out', stiffness: 100, duration: 0.2 }}
                    >
                      {/* Fixed header section */}
                      <div className="flex-shrink-0">
                        <div className="relative z-20 flex items-center gap-x-2 pl-[16px] h-[12.37px] md:h-[25px] lg:h-[43px]">
                          <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#ED6A5E]" />
                          <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#F4BF50]" />
                          <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#61C554]" />
                        </div>
                        {/* Searchbar */}
                        <div className="relative my-[16px] mx-[16px] searchbar">
                          <input
                            type="search"
                            className="h-[35px] bg-gray-100 rounded-[70px] outline-none pl-[40px] w-full"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <div className="absolute top-0 left-[10px] bottom-0 flex items-center">
                            <Image src="/customer-stories/search.svg" alt="search icon" width={20} height={20} />
                          </div>
                        </div>
                        <div className="font-bold text-[14px] mb-[8px] m-[16px]">CUSTOMER STORIES</div>
                      </div>

                      {/* Scrollable conversations list */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="px-[8px]">
                          {conversations
                            ?.filter(
                              (conversation) =>
                                conversation.contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                conversation.contact.company.toLowerCase().includes(searchTerm.toLowerCase()),
                            )
                            .map((conversation) => (
                              <div
                                key={conversation.id}
                                className={classNames(
                                  'flex items-center gap-x-[8px] w-full p-[8px] rounded-[10px] hover:bg-gray-100 hover:cursor-pointer',
                                  selectedConversation.id === conversation.id && 'bg-gray-200',
                                )}
                                onClick={() => {
                                  setSelectedConversation(conversation);
                                  setShowLeftPanel(false);
                                }}
                              >
                                <div className="relative h-[50px]">
                                  <Image
                                    width={50}
                                    height={50}
                                    src={conversation.contact.photo}
                                    alt={conversation.contact.name}
                                    className="rounded-full"
                                  />
                                  <div className="absolute bottom-0 right-0 flex">
                                    <Image
                                      src={conversation.contact.logo}
                                      alt={conversation.contact.name}
                                      width={24}
                                      height={24}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col flex-grow">
                                  <div className="flex justify-between">
                                    <div className="font-bold text-[16px] text-purple-900 mb-[4px] leading-[20px]">
                                      {conversation.contact.name}
                                    </div>
                                    <div className="text-[11px] font-medium text-gray-600">
                                      {conversation.messages[conversation.messages.length - 1].time}
                                    </div>
                                  </div>
                                  <div className="text-[14px] text-gray-600 leading-[16px]">
                                    {conversation.contact.company}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                    {/* Conversation */}
                    <div className="w-full flex flex-col h-full flex-1">
                      <div className="flex border-b border-gray-200 p-[16px] bg-white">
                        <button
                          className="cursor-pointer p-[8px] hover:bg-gray-100 rounded-md mr-[8px] lg:hidden"
                          onClick={() => {
                            setShowLeftPanel(true);
                            setShowRightPanel(false);
                          }} // Toggle visibility
                        >
                          <ChevronLeftIcon className="h-[24px] w-[24px] text-purple-900" />
                        </button>
                        <button
                          className="cursor-pointer lg:cursor-default p-[8px] hover:bg-gray-100 lg:hover:bg-inherit rounded-md flex w-full items-center"
                          onClick={() => {
                            if (!screenSize.lg) {
                              setShowRightPanel(true);
                              setShowLeftPanel(false);
                            }
                          }} // Toggle visibility
                        >
                          <div className="relative h-[50px] mr-[8px]" onClick={() => setShowRightPanel(true)}>
                            <Image
                              width={50}
                              height={50}
                              src={selectedConversation.contact.photo}
                              alt={selectedConversation.contact.name}
                              className="rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 flex">
                              <Image
                                src={selectedConversation.contact.logo}
                                alt={selectedConversation.contact.name}
                                width={24}
                                height={24}
                              />
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="font-bold	text-[16px] leading-[19px] text-purple-900 mb-[8px]">
                              {selectedConversation.contact.name}
                            </p>
                            <p className="text-[12px] font-medium leading-[14px] text-gray-600">
                              {selectedConversation.contact.company}
                            </p>
                          </div>
                          <div className="ml-auto lg:hidden flex">
                            <InformationCircleIcon className="h-[24px] w-[24px] text-purple-900" />
                          </div>
                        </button>
                      </div>
                      <div className="flex-1 relative">
                        <div className="absolute inset-0">
                          <Image
                            src="/customer-stories/whatsapp-bg.svg"
                            alt="whatsapp bg"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="absolute inset-0 overflow-y-auto w-full flex flex-col gap-y-[16px] p-[16px]">
                          {selectedConversation.messages.map((message, index) => (
                            <div className={classNames(message.sender === 'Enzo' && 'self-end')} key={index}>
                              <WhatsappBubble
                                pp={
                                  message.sender === 'Enzo'
                                    ? '/customer-stories/enzo.jpg'
                                    : selectedConversation.contact.photo
                                }
                                color={message.sender === 'Enzo' ? 'green' : 'default'}
                                image={message.image}
                                name={message.sender}
                                text={message.message}
                                right={message.sender === 'Enzo'}
                                time={message.time}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Details screen */}
                    <motion.div
                      className="absolute lg:relative right-0 top-0 h-full w-[300px] bg-white border-l-[1px] border-gray-200 md:block z-20"
                      initial={{ x: screenSize.lg ? '0%' : '100%' }} // Start completely offscreen to the right
                      animate={{ x: screenSize.lg ? '0%' : showRightPanel ? '0%' : '100%' }} // Move into view or back out
                      transition={{ type: 'ease-in-out', stiffness: 100, duration: 0.2 }}
                    >
                      <div className="p-[16px]">
                        <div className="flex justify-between mb-[32px] items-center">
                          <p className="text-[16px] font-bold ">Contact info</p>
                          <button
                            className="flex p-[8px] hover:bg-gray-100 rounded-md lg:hidden"
                            onClick={() => setShowRightPanel(false)}
                          >
                            <XMarkIcon className="h-[24px] w-[24px] text-gray-600" />
                          </button>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="relative h-[100px] mb-[16px]">
                            <Image
                              width={100}
                              height={100}
                              src={selectedConversation.contact.photo}
                              alt={selectedConversation.contact.name}
                              className="rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 flex">
                              <Image
                                src={selectedConversation.contact.logo}
                                alt={selectedConversation.contact.name}
                                width={40}
                                height={40}
                              />
                            </div>
                          </div>
                          <p className="font-bold	text-[22px] leading-[26px] text-purple-900 mb-[8px]">
                            {selectedConversation.contact.name}
                          </p>
                          <p className="text-[12px] font-medium leading-[14px] text-gray-600 mb-[8px]">
                            {selectedConversation.contact.company}
                          </p>
                        </div>
                        <p className="font-bold	text-[14px] text-purple-900 leading-[16px] mb-[4px]">About</p>
                        <p className="mb-[20px] text-[14px] leading-[20px] text-gray-600">
                          {selectedConversation.contact.about}
                        </p>
                        <div className="flex gap-x-[8px] mb-[8px]">
                          <Image src="/customer-stories/about/company.svg" alt="company" width={24} height={24} />
                          <div className="grid grid-cols-2 flex-grow">
                            <p className="text-[14px] leading-[24px] text-gray-600">Company</p>
                            <a
                              href={selectedConversation.contact.company_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[14px] leading-[24px] text-purple-900 underline"
                            >
                              {selectedConversation.contact.company}
                            </a>
                          </div>
                        </div>
                        <div className="flex gap-x-[8px] mb-[8px]">
                          <Image src="/customer-stories/about/employees.svg" alt="employees" width={24} height={24} />
                          <div className="grid grid-cols-2 flex-grow">
                            <p className="text-[14px] leading-[24px] text-gray-600">Employees</p>
                            <p className="text-[14px] leading-[24px] text-purple-900">
                              {selectedConversation.contact.employees}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-x-[8px] mb-[8px]">
                          <Image src="/customer-stories/about/funding.svg" alt="funding" width={24} height={24} />
                          <div className="grid grid-cols-2 flex-grow">
                            <p className="text-[14px] leading-[24px] text-gray-600">Funding</p>
                            <p className="text-[14px] leading-[24px] text-purple-900">
                              {selectedConversation.contact.funding}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-x-[8px] mb-[8px] h-[24px]">
                          <div className="shrink-0">
                            <Image src="/customer-stories/about/location.svg" alt="location" width={24} height={24} />
                          </div>
                          <div className="grid grid-cols-2 flex-grow">
                            <p className="text-[14px] leading-[24px] text-gray-600">Location</p>
                            <p className="text-[14px] leading-[24px] text-purple-900 text-ellipsis whitespace-nowrap overflow-hidden">
                              {selectedConversation.contact.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-x-[8px] mb-[16px] h-[24px]">
                          <Image
                            src="/customer-stories/about/feature.svg"
                            alt="feature"
                            width={24}
                            height={24}
                            className="shrink-0"
                          />
                          <div className="grid grid-cols-2 flex-grow">
                            <p className="text-[14px] leading-[24px] text-gray-600">Favourite feature</p>
                            <p className="text-[14px] leading-[24px] text-purple-900 text-ellipsis whitespace-nowrap overflow-hidden">
                              {selectedConversation.contact.feature}
                            </p>
                          </div>
                        </div>
                        <p className="font-bold	text-[14px] text-purple-900 mb-[8px]">Media, links and doc</p>
                        <div className="mb-[16px] flex gap-x-[8px]">
                          {selectedConversation.messages
                            .filter((message) => message.image)
                            .map((message, index) => (
                              <div
                                key={index}
                                className="border border-gray-50 rounded-[5px] w-[60px] h-[60px] overflow-hidden"
                              >
                                <>
                                  <Image
                                    src={message.image}
                                    alt={`image ${index + 1}`}
                                    width={60}
                                    height={60}
                                    objectFit="cover"
                                    onClick={onOpen}
                                  />
                                  <Modal onClose={onClose} isOpen={isOpen} isCentered size={'3xl'}>
                                    <ModalOverlay />
                                    <ModalContent>
                                      <ModalCloseButton />
                                      <ModalHeader></ModalHeader>
                                      <ModalBody>
                                        <div>
                                          <Image
                                            src={message.image}
                                            layout="responsive"
                                            width={400}
                                            height={400}
                                            objectFit="contain"
                                          />
                                        </div>
                                      </ModalBody>
                                    </ModalContent>
                                  </Modal>
                                </>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                          <p className="font-bold	text-[14px] mr-[4px] hover:underline">
                            <Link href={`/customer-stories/${selectedConversation.contact.full_story_slug}`}>
                              Read full customer story
                            </Link>
                          </p>
                          <ArrowUpRightIcon className="h-[14px] w-[14px] text-purple-900 stroke-1" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsappSection;
