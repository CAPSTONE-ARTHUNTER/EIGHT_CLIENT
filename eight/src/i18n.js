import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // 번역본 작성
          profile: {
            alias: "challenger",
            pieceFound: "Arts Found",
          },
          mainPage: {
            searchMsg: "Let's find a great Artwork!",
            todayArt: "Today's Artwork",
            goDocent: "Docent",
            goCollection: "Collection",
          },
        },
      },
      ko: {
        translation: {
          profile: {
            alias: "도전자",
            pieceFound: "발견한 작품",
          },
          mainPage: {
            searchMsg: "찾으시는 작품이 있나요?",
            todayArt: "오늘의 작품",
            goDocent: "해설 보기",
            goCollection: "도감 보기",
          },
        },
      },
    },
  });

export default i18n;
