import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ContentTypeData } from 'types/content-type-interface';
import { ContentType } from 'types/enums';

export interface ResourcesHeaderProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  setFilter: (filter: ContentType) => void;
}

const contentTypes: ContentTypeData[] = [
  {
    name: 'Featured',
    type: ContentType.FEATURED,
    icon: '/content/featured.svg',
    textColor: 'text-primary',
    borderColor: 'border-gray-200',
    shadowColor: 'shadow-gray-200',
    bgColor: 'bg-white',
  },
  {
    name: 'All',
    type: ContentType.ALL,
    icon: '/content/all.svg',
    textColor: 'text-primary',
    borderColor: 'border-gray-200',
    shadowColor: 'shadow-gray-200',
    bgColor: 'bg-white',
  },
  {
    name: 'Blog post',
    type: ContentType.BLOG,
    icon: '/content/blog-post.svg',
    textColor: 'text-third',
    borderColor: 'border-third/20',
    shadowColor: 'shadow-third/20',
    bgColor: 'bg-secondary/50',
  },
  {
    name: 'Podcast',
    type: ContentType.PODCAST,
    icon: '/content/podcast.svg',
    textColor: 'text-blue-500',
    borderColor: 'border-blue-500/20',
    shadowColor: 'shadow-blue-500/20',
    bgColor: 'bg-blue-300/50',
  },
  {
    name: 'Video',
    type: ContentType.VIDEO,
    icon: '/content/video.svg',
    textColor: 'text-green-500',
    borderColor: 'border-green-500/20',
    shadowColor: 'shadow-green-500/20',
    bgColor: 'bg-green-300/50',
  },
  {
    name: 'Guide',
    type: ContentType.GUIDE,
    icon: '/content/guide.svg',
    textColor: 'text-brown-500',
    borderColor: 'border-brown-500/20',
    shadowColor: 'shadow-brown-500/20',
    bgColor: 'bg-brown-300/50',
  },
];

export function ResourcesHeader(props: ResourcesHeaderProps) {
  const [selectedContentType, setSelectedContentType] = useState(ContentType.FEATURED);
  const [openDropdown, setOpenDropown] = useState(false);

  const selectedTypeStyle = useMemo(() => {
    return contentTypes.find((content) => content.type === selectedContentType);
  }, [selectedContentType]);

  const handleSelect = (type: ContentType) => {
    setSelectedContentType(type);
    props.setFilter(type);
  };

  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openDropdown]);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:justify-between font-hero">
      {openDropdown && (
        <div
          className="fixed top-0 left-0 z-[1301] w-full h-full bg-[#000000]/50"
          onClick={() => {
            setOpenDropown(false);
          }}
        />
      )}
      <div className="flex flex-col items-start gap-4">
        <div className="text-6xl md:text-8xl text-left font-black text-primary">{props.title}</div>
        {props.description && (
          <p className="max-w-[448px] text-primary text-left text-[20px] md:text-[24px] font-semibold text-primary">
            {props.description}
          </p>
        )}
      </div>
      <div className="hidden lg:flex justify-end gap-4 flex-wrap w-[500px] mt-0">
        {contentTypes.map((contentType) => (
          <motion.div
            animate={{ scale: selectedContentType === contentType.type ? 1.06 : 1, originY: 1 }}
            transition={{ duration: 0.2 }}
            key={contentType.name}
            className={classNames(
              'cursor-pointer font-primary font-medium flex items-center gap-2 border-[2px] rounded-full h-[64px] px-[21px]',
              selectedContentType === contentType.type ? `shadow-md ${contentType.shadowColor}` : 'opacity-50',
              'hover:opacity-100',
              contentType.textColor,
              contentType.bgColor,
              contentType.borderColor,
            )}
            onClick={() => handleSelect(contentType.type)}
          >
            <img src={contentType.icon} alt={contentType.name} />
            <p className="text-[21.33px]">{contentType.name}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex lg:hidden relative w-full justify-center my-10">
        <div
          className={`flex items-center cursor-pointer lg:hidden justify-between rounded-[20px] border-2 ${selectedTypeStyle.borderColor} ${selectedTypeStyle.bgColor} p-4 w-full h-[64px] `}
          onClick={() => {
            setOpenDropown(true);
          }}
        >
          <div className={`flex items-center gap-x-[12px] pointer-events-none`}>
            <img src={selectedTypeStyle.icon} alt="content-type-icon" />

            <div className={`font-semibold text-[20px] ${selectedTypeStyle.textColor}`}>{selectedTypeStyle.name}</div>
          </div>
          <img className="m-1" src="/auto-generated-reports/dropdown-icon.svg" alt="Dropdown" />
        </div>
        <div
          className={`lg:hidden absolute w-full z-[3001] -top-28 left-0 flex flex-col items-end p-4 bg-white rounded-[20px] gap-y-4 ${
            openDropdown ? 'visible' : 'hidden'
          }`}
        >
          <div
            onClick={() => {
              setOpenDropown(false);
            }}
          >
            <img src="/auto-generated-reports/close.svg" alt="Close" className="cursor-pointer" />
          </div>
          {contentTypes.map(({ icon, type, bgColor, borderColor, textColor, name }, index) => {
            return (
              <div
                key={index}
                className={`flex w-full items-center border-2 ${bgColor} ${borderColor} lg:hidden justify-between rounded-[20px] p-4 w-full h-[64px] cursor-pointer`}
                onClick={() => {
                  handleSelect(type);
                  setOpenDropown(false);
                }}
              >
                <div className={`flex items-center gap-x-[12px]`}>
                  <img className="p-1.5" src={icon} alt="content-type-icon" />
                  <div className={`font-semibold text-[20px] ${textColor}`}>{name}</div>
                </div>
                <img
                  className={`mr-1 ${selectedContentType === type ? 'visible' : 'hidden'}`}
                  src="/auto-generated-reports/check.svg"
                  alt="Check"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
