import Enlang from './entries/en-US';
import Hylang from './entries/hy';
import { addLocaleData } from 'react-intl';

const AppLocale = {
  en: Enlang,
  hy: Hylang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.hy.data);

export default AppLocale;
