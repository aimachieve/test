import i18n from 'i18next';
import common_en from './translations/en/common.json';
import common_pt from './translations/pt/common.json';


i18n
    // .use(Backend)
    // .use(LanguageDetector)
    // .use(initReactI18next) // bind react-i18next to the instance
    .init({
        lng: "en",
        fallbackLng: "en", // use en if detected lng is not available

        // saveMissing: true, // send not translated keys to endpoint

        // keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        resources: {
            en: {
                common: common_en
            },
            pt: {
                common: common_pt
            }
        }
    });


export default i18n;