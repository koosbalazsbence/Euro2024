import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationHU from "../public/locale/hu.json"
import translationEN from "../public/locale/en.json"

const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "hu",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
