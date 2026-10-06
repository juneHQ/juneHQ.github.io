import { HeroBubble } from './hero-bubble';
import { motion } from 'framer-motion';

export const Hero = () => {
  const generateFloatAnimation = (): any => ({
    y: ['0%', `${Math.random() * -10 - 5}%`, '0%'],
    transition: {
      duration: 4 + Math.random() * 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
      delay: Math.random() * 2,
    },
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };
  return (
    <div className="h-[70vh] mb-[50px] flex flex-col items-center justify-center relative overflow-x-hidden">
      <div className="text-purple-900 font-hero text-center max-w-[481px]">
        <h1 className="text-[56px] lg:text-[88px] font-black leading-[66px] lg:leading-[106px] mb-[8px] lg:mb-[16px]">
          Customers
        </h1>
        <p className="text-[20px] lg:text-[24px] font-semibold leading-[30px] lg:leading-[36px]">
          Read how next-gen SaaS companies use June to understand their users
        </p>
      </div>
      <motion.ol variants={container} initial="hidden" animate="show">
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute top-[30px] right-[200px] hidden lg:flex"
        >
          <HeroBubble
            pp="/customer-stories/conversations/luminovo.jpg"
            color="green"
            image="/customer-stories/company-logos/luminovo.png"
            text="We stopped losing customers by spotting risks early."
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute bottom-[220px] left-[30px] hidden lg:flex"
        >
          <HeroBubble
            pp="/customer-stories/conversations/trueclicks.jpg"
            color="purple"
            image="/customer-stories/company-logos/trueclicks.png"
            text="We made it easy for customers to see the value we provide."
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute top-[40px] left-[20px] sm:left-[100px]"
        >
          <HeroBubble
            pp="/customer-stories/conversations/knack.jpg"
            color="purple"
            image="/customer-stories/company-logos/knack.png"
            text="We're now able to proactively engage with users based on their behaviour"
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="hidden md:flex absolute top-[100px] md:right-[20px] lg:right-[75px]"
        >
          <HeroBubble
            pp="/customer-stories/conversations/vev.jpg"
            color="blue"
            image="/customer-stories/company-logos/vev.png"
            text="Our teams are now more proactive and informed"
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute top-[120px] lg:top-[150px] left-[-25px] sm:left-[50px] hidden lg:flex"
        >
          <HeroBubble
            pp="/customer-stories/conversations/clerk.jpg"
            color="yellow"
            image="/customer-stories/company-logos/clerk.png"
            text="Activating new users is so much easier with June"
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute right-[30px] bottom-[200px] hidden lg:flex"
        >
          <HeroBubble
            pp="/customer-stories/conversations/commandbar.jpg"
            color="pink"
            image="/customer-stories/company-logos/commandbar.png"
            text="We’ve become more focused in our feature development process"
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute right-[40px] lg:right-[120px] bottom-[50px] lg:bottom-[100px]"
        >
          <HeroBubble
            pp="/customer-stories/conversations/requestly.jpg"
            color="green"
            image="/customer-stories/company-logos/requestly.png"
            text="Understanding both individual and team usage"
          />
        </motion.li>
        <motion.li
          variants={item}
          animate={generateFloatAnimation()}
          className="absolute left-[30px] bottom-[130px] lg:bottom-[100px] hidden md:flex"
        >
          <HeroBubble
            pp="/customer-stories/conversations/bridge.jpg"
            color="blue"
            image="/customer-stories/company-logos/bridge.png"
            text="Refining features that truly matter to our users’ initial experience"
          />
        </motion.li>
      </motion.ol>
    </div>
  );
};

export default Hero;
