import { useTranslation } from 'next-i18next';
import { Contact } from './contact';
import { Socials } from './socials';
import { Container } from '@src/components/shared/container';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t-color border-gray200 mt-10 border-t">
      <motion.div
        initial={{ opacity: 0, y: +100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <div className="border-b-color border-gray200 mt-10 flex flex-col justify-center border-b pb-5 md:flex-row">
          <Socials />
          <Contact />
        </div>
      </motion.div>
    </footer>
  );
};
