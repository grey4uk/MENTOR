import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../services/language';

const Example = () => {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  console.log(`language`, lang);

  return (
    <>
      <h2>Example</h2>
      <p>{t('message')}</p>
    </>
  );
};

export default Example;
