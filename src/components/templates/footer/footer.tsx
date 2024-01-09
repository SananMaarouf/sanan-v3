import { useTranslation } from 'next-i18next';
import { Contact } from './contact';
import { Socials } from './socials';
import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t-color border-gray200 mt-10 border-t">
      <div className="border-b-color border-gray200 mt-10 flex flex-col justify-center border-b pb-5 md:flex-row">
        <Socials />
        <Contact />
      </div>
    </footer>
  );
};
