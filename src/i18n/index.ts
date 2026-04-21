import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import viCommon from './locales/vi/common.json'

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'vi'] as const

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem('app-language')

  if (storedLanguage && supportedLanguages.includes(storedLanguage as (typeof supportedLanguages)[number])) {
    return storedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('vi') ? 'vi' : defaultLanguage
}

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon
    },
    vi: {
      common: viCommon
    }
  },
  lng: getInitialLanguage(),
  fallbackLng: defaultLanguage,
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  }
})

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('app-language', language)
    document.documentElement.lang = language
  }
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

export default i18n
