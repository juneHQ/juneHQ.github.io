import React from 'react';
import NextImage from 'next/image';
import { classNames } from 'lib/utils';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const WhatsappBubble = ({ right, pp, color, name, text, image = null, time }) => {
  const colors = {
    default: { text: 'text-purple-900', bg: 'bg-white', name: 'text-purple-900' },
    purple: { text: 'text-third', bg: 'bg-secondary' },
    yellow: { text: 'text-[#5F2700]', bg: 'bg-[#FFE9C8]' },
    blue: { text: 'text-blue-500', bg: 'bg-blue-300' },
    pink: { text: 'text-[#800000]]', bg: 'bg-[#FFD2E1]' },
    green: { text: 'text-black', bg: 'bg-green-300', name: 'text-green-500' },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className={classNames('flex gap-[8px] items-end', right && 'flex-row-reverse')}>
        <div className="flex z-10 drop-shadow-lg rounded-full overflow-hidden">
          <NextImage src={pp} width={40} height={40} />
        </div>
        <div
          className={classNames(
            'max-w-[280px] py-[7px] px-[14px] rounded-[15px] relative drop-shadow-lg',
            colors[color]?.bg,
          )}
        >
          <div className={classNames('font-bold text-[14px] leading-[18px] mb-[8px]', colors[color]?.name)}>{name}</div>
          {image && (
            <>
              <NextImage
                src={image}
                layout="intrinsic"
                width={250}
                height={150}
                objectFit="cover"
                className="rounded-[10px] cursor-pointer mb-[8px]"
                quality={75}
                onClick={onOpen}
              />
              <Modal onClose={onClose} isOpen={isOpen} isCentered size={'3xl'}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalHeader></ModalHeader>
                  <ModalBody>
                    <div>
                      <NextImage src={image} layout="responsive" width={400} height={400} objectFit="contain" />
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )}
          <div className={classNames('leading-[22px] font-normal text-[17px] pr-[19px]', colors[color]?.text)}>
            {text.split('\n').map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div
            className={classNames(
              'font-medium text-[11px] leading-[13px] absolute bottom-[7px] right-[7px] z-20',
              colors[color]?.name,
            )}
          >
            {time}
          </div>
          {right ? (
            <div className="absolute right-[-5px] bottom-0 w-[20px] h-[14px] flex">
              <NextImage src="/customer-stories/tail-right.svg" width={20} height={14} />
            </div>
          ) : (
            <div className="absolute left-[-5px] bottom-0 w-[20px] h-[14px] flex">
              <NextImage src="/customer-stories/tail-left.svg" width={20} height={14} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsappBubble;
