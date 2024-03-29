import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'next-i18next';
import { Container } from '@src/components/shared/container';

export const Contact = () => {
  const { t } = useTranslation();

  const [state, handleSubmit, resetForm] = useForm('mqkvqyvz');

  if (state.succeeded) {
    return (
      <div className="mt-3 text-center md:mt-0">
        <h2 className="text-center">{t('footer.contact.title')}</h2>
        <Container
          className="
          mx-auto 
          mt-1 
          max-w-xl 
          rounded-lg 
          border 
          bg-white 
          p-6 
          text-black 
          shadow-lg
          md:border-gray-100 
          "
        >
          <h2>{t('footer.contact.success.messageSent')}</h2>
          <button
            onClick={resetForm}
            className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            {t('footer.contact.success.sendNew')}
          </button>
        </Container>
      </div>
    );
  }

  return (
    /* add flex-row when you want to implement a sitemap or another column  */
    <div className="mt-3 md:mt-0">
      <h2 className="text-center font-semibold">{t('footer.contact.title')}</h2>
      <Container className="mt-1 flex flex-col justify-center md:mt-3">
        <form
          onSubmit={handleSubmit}
          className="border-gray300 mx-auto max-w-xl rounded-2xl rounded-lg border bg-white p-6 shadow-lg dark:shadow-gray-100 "
        >
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
            {t('footer.contact.form.email')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-100 shadow focus:outline-none dark:text-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-700">
            {t('footer.contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            className="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:text-white"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <p className="mx-auto">{t('footer.contact.form.submit')}</p>
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </Container>
    </div>
  );
};
