import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18n from '../../services/i18n';
import { useLanguage } from '../../services/language';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setLang } = useLanguage();

  const handleChange = e => {
    i18n.changeLanguage(e.target.value);
    navigate(`/${e.target.value}`);
    setLang(e.target.value);
  };

  return (
    <>
      <select
        name="select"
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
      <h1> HomePage</h1>
      <p>{t('title')}</p>
    </>
  );
};

export default HomePage;
