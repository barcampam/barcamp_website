import antdHY from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/hy';
import hyMessages from '../locales/hy.json';

const hyLang = {
  messages: {
    ...hyMessages
  },
  antd: antdHY,
  locale: 'hy',
  data: appLocaleData
};
export default hyLang;
