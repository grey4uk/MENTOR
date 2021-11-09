import { NavLink } from 'react-router-dom';
import RoutesEx from '../Routes/RoutesEx';
import { useLanguage } from '../../services/language';

const Navigation = () => {
  const { lang } = useLanguage();
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            display: 'block',
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
      >
        HomePage
      </NavLink>
      <NavLink
        to={`/example/${lang}`}
        state={lang}
        style={({ isActive }) => {
          return {
            display: 'block',
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
      >
        Example
      </NavLink>
      <RoutesEx />
    </>
  );
};

export default Navigation;
