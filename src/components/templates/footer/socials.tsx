import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { Container } from '@src/components/shared/container';

export const Socials = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-center">{t('footer.socials')}</h2>
      <Container className="mt-1 w-[24rem] md:mt-5 md:w-44">
        <a
          className="flex flex-row justify-center rounded-lg bg-blue-600"
          href="https://www.linkedin.com/in/sanan-maarouf//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="ml-2 py-2 text-lg font-semibold text-white">Linked</p>
          <button className="ml-0.5 mr-2 block w-6 self-center">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff' }} />
          </button>
        </a>
      </Container>
    </div>
  );
};
