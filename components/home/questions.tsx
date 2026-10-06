import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { ReportType, reportTypes } from './tabs';

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}


function Parallax({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 1000,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef<number>(1);
  scrollY.updateAndNotify;

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <motion.div className="flex justify-end flex-nowrap gap-x-[24px]" style={{ x }}>
      {children}
      {children}
      {children}
      {children}
    </motion.div>
  );
}

export const QuestionScroll = ({selectedReport}: {selectedReport: ReportType}) => {

  return <div className="flex flex-col gap-y-4 lg:gap-y-6 ">
  {[
    [
      {
        report: reportTypes[1],
        question: 'How many users come back?',
      },
      {
        report: reportTypes[1],
        question: 'How might churn?',
      },
      {
        report: reportTypes[0],
        question: 'Who found our Aha moments?',
      },
      {
        report: reportTypes[2],
        question: 'Who loves this feature the most?',
      },
    ],
    [
      {
        report: reportTypes[0],
        question: 'Who is struggling to onboard?',
      },
      {
        report: reportTypes[2],
        question: 'How many users use my product weekly?',
      },
      { report: reportTypes[4], question: 'Who is using my product less?' },
    ],
    [
      { report: reportTypes[2], question: 'Who is most active?' },
      {
        report: reportTypes[0],
        question: 'Who needs help to set up?',
      },
      { report: reportTypes[3], question: 'Who hasn’t used my feature?' },
      {
        report: reportTypes[1],
        question: 'Who is most retained?',
      },
    ],
  ].map((row, colIndex) => {
    return (
      <div key={colIndex} className="flex gap-x-6 lg:gap-x-[24px] justify-center ">
        <Parallax baseVelocity={(colIndex + 1) % 2 === 1 ? -2 : 2}>
          {row.map(({ report, question }) => {
            return (
              <div
                className={`flex items-center gap-x-3 lg:gap-x-4 text-4 border-[1px] lg:border-2  ${
                  selectedReport.type === report.type ? `${report.borderColor}` : 'border-white'
                }  rounded-full shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] pr-5 pl-2 lg:pr-6 lg:pl-3 h-[44px]  lg:h-[56px] lg:text-[18px] whitespace-nowrap`}
                key={question}
              >
                <div
                  className={`flex justify-center items-center h-7 w-7 lg:h-8 lg:w-8 p-[6px] rounded-full ${report.bgColor}`}
                >
                  <img src={report.icon} />
                </div>
                <div className="font-medium">{question}</div>
              </div>
            );
          })}
        </Parallax>
      </div>
    );
  })}
  </div>
}