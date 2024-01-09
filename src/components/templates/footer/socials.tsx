import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { Container } from '@src/components/shared/container';

export const Socials = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-center">{t('footer.socials')}</h2>
      <Container className="mt-1 max-w-[26rem] md:mt-5">
        <a
          className="flex flex-row justify-center rounded-lg bg-blue-600"
          href="https://www.linkedin.com/in/sanan-maarouf//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mr-2 w-6 self-center">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: '#ffffff' }} />
          </button>
          <p className="py-2 text-lg font-semibold text-white">Linkedin</p>
        </a>
      </Container>
    </div>
  );
};
