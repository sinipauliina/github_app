import i18n from 'i18next'
import {reactI18nextModule} from 'react-i18next'

import en from './resources/en.json'
import fi from './resources/fi.json'

i18n.use(reactI18nextModule).init({
  lng: 'fi',
  fallbackLng: 'en',
  debug: true,
  keySeparator: true,
  resources: {
    en: {
      translation: en,
    },
    fi: {
      translation: fi,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

export default i18n
