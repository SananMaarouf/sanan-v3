import { useTranslation } from 'next-i18next';
import { Contact } from './contact';
import { Socials } from './socials';
import { Container } from '@src/components/shared/container';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { t } = useTranslation();
  const motionProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, delay: 2 },
  };

  return (
    <footer
      id="contact"
      className="mt-10 bg-opacity-90 bg-clip-padding backdrop-blur-sm backdrop-filter dark:bg-gray-100 dark:bg-opacity-80 dark:backdrop-blur-md"
    >
      <motion.div {...motionProps}>
        <div className="border-b-color border-gray200 mt-10 flex flex-col justify-center border-b pb-5 md:flex-row">
          <Socials />
          <Contact />
        </div>
      </motion.div>
    </footer>
  );
};
