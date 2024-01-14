import { Container } from '@src/components/shared/container';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDownload } from '@fortawesome/free-solid-svg-icons';
import NextImage from 'next/image';
import { getServerSideTranslations } from './utils/get-serverside-translations';
import { GetStaticProps } from 'next';

const ResumePage = () => {
  const { t } = useTranslation();

  const imgUrl = '/images/portrett_1_t.png';
  const frontend = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Next.js', 'Vue.js'];
  const backend = ['Ruby', 'Java', 'Python', 'Dart', 'PHP'];
  const database = ['MySQL', 'Firebase'];
  const other = ['Git', 'Jira', 'Tableau', 'AdobeXD', 'Figma', 'Microsoft Office 365'];
  return (
    <Container className="flex max-w-3xl flex-col">
      <section className="">
        {/* picture and info */}
        <section className="flex flex-row">
          <NextImage
            src={imgUrl}
            width={200}
            height={200}
            alt="Sanan Maarouf"
            className="rounded-md"
          />
          <section className="mx-auto my-auto flex flex-col">
            <h2>Sanan Maarouf</h2>
            <p>{t('resume.jobtitle')}</p>
            <p>+47 47264992</p>
            <div className="flex flex-row p-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="ml-2">{t('resume.location')}</p>
            </div>
          </section>
        </section>
        {/* about me */}
        {/*  <section className="flex w-full flex-row justify-center">
          <p className="text-lg"> {t("resume.summary")}</p>
        </section> */}
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>{t('resume.experience.title')}</h2>
        <section className="flex flex-row">
          {/* the timeline line */}
          <section className="my-auto flex ">
            <hr className="mt-3 h-20 w-1 rounded bg-gray-300"></hr>
          </section>
          {/* the jobs on the timeline */}
          <section className="flex flex-col">
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.experience.fsd')}</h3>
                <h3 className="font-semibold">{t('resume.experience.laft')}</h3>
                <p className="mb-3">{t('resume.experience.laftDate')}</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.experience.machinist')}</h3>
                <h3 className="font-semibold">{t('resume.experience.nfkino')}</h3>
                <p className="mb-3">{t('resume.experience.nfkinoDate')}</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>{t('resume.education.title')}:</h2>
        {/* Add your education details here */}
        <section className="flex flex-row">
          {/* the timeline line */}
          <section className="my-auto flex ">
            <hr className="mt-6 h-24 w-1 rounded bg-gray-300"></hr>
          </section>
          {/* the jobs on the timeline */}
          <section className="flex flex-col">
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.education.usn')}</h3>
                <h3 className="font-semibold">{t('resume.education.it')}</h3>
                <h3 className="font-semibold">{t('resume.education.bachelor')}</h3>
                <p className="mb-3">{t('resume.education.bachelorDate')}</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="-ml-[0.33rem] mr-3 h-[7px] w-[7px] rounded-full bg-gray-500" />
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.education.vgs')}</h3>
                <h3 className="font-semibold">{t('resume.education.field')}</h3>
                <p className="mb-3">{t('resume.education.vgsDate')}</p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>{t('resume.skills.title')}</h2>
        {/* Add your skills here */}
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="items-center pt-3">
              <h3 className="font-bold">Frontend:</h3>
              <div className="flex flex-row flex-wrap">
                {frontend.map((item, index) => (
                  <p
                    key={index}
                    className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">Backend:</h3>
                <div className="flex flex-row">
                  {backend.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">Database:</h3>
                <div className="flex flex-row">
                  {database.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <div className="flex flex-col">
                <h3 className="font-bold">{t('resume.skills.other')}</h3>
                <div className="flex flex-row flex-wrap">
                  {other.map((item, index) => (
                    <p
                      key={index}
                      className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      <section>
        <h2>{t('resume.languages.title')}</h2>
        <section className="flex flex-row">
          <section className="flex flex-col">
            <div className="items-center pt-1">
              <div className="flex flex-row flex-wrap">
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.norwegian')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.english')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.german')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.kurdish')}
                </p>
                <p
                  className={`ml-2 mt-1 flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10`}
                >
                  {t('resume.languages.turkish')}
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* page divider */}
        <hr className="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-700"></hr>
      </section>
      {/* button to download CV-Sanan.pdf from public/files */}
      <section className="mx-auto flex flex-col">
        <p className="text-center text-2xl">{t('resume.footer.title')}</p>
        <p className="mb-2 text-center text-xl">{t('resume.footer.prompt')}</p>
        <a
          className="
                flex 
                flex-row 
                justify-center 
                rounded-lg 
                bg-blue-600 
                hover:bg-blue-900"
          href="/files/CV-Sanan.pdf"
          download
          rel="noopener noreferrer"
        >
          <p className="ml-2 py-2 text-lg font-semibold text-white">
            {t('resume.footer.download')}
          </p>
          <button className="ml-0.5 mr-2 block w-6 self-center">
            <FontAwesomeIcon icon={faDownload} style={{ color: '#ffffff' }} />
          </button>
        </a>
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};
export default ResumePage;
