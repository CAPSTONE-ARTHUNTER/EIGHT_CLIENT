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
          header: {
            searchPage: "Search Arts",
            detectionPage: "Tag Recognition",
            collectionPage: "Collection",
            myPage: "My Page",
            settings: {
              langSetting: "Language Setting",
              account: "Account Setting",
            },
          },
          profile: {
            alias: "challenger",
            pieceFound: "Arts Found",
          },
          sideSheet: {
            lang: "Language",
            sound: "Sound",
            info: "App info",
          },
          mainPage: {
            searchMsg: "Let's find a great Artwork!",
            todayArt: "Today's Artwork",
            goDocent: "Docent",
            goCollection: "Collection",
          },
          searchPage: {
            artList: "List of Art",
          },
          collectionPage: {
            collection: "{{tabName.firsten}}",
            challenge: "{{tabName.seconden}}",
            badgesTitle: "Badges",
            challengeTitle: "Challenges",
            challengeCompleteTitle: "Completed Challenges",
            noBadge1: "No badges!",
            noBadge2: "collect artworks and gather the badges",
          },
          myPage: {
            alert: "Alert & Sound",
            account: "Account",
            info: "App info",
          },
          DocentPage: {
            partTitle: "Gather all parts to get a badge!",
            badgeComplete: "Got a badge!",
            badgeInfo1: "collect {{leftPart}} more piece",
            badgeInfo2: "to get {{badgeName}} badge!",
            btnTxt: "See all Commentary",

            Detail: {
              btnTxt: "Let's go find parts",
            },

            Exp: {
              lockedMsg1: "This commentary is locked",
              lockedMsg2: "Find the hidden parts to unlock!",
            },
          },

          settingPage: {
            langNow: "Current language is {{lang}}",
            logOut: "LogOut",
            deleteAccount: "Delete Account",
          },
        },
      },
      ko: {
        translation: {
          header: {
            searchPage: "작품 검색",
            detectionPage: "작품 태그 인식",
            collectionPage: "도감",
            myPage: "마이페이지",
            settings: {
              langSetting: "언어 설정",
              account: "계정",
            },
          },
          profile: {
            alias: "도전자",
            pieceFound: "발견한 작품",
          },
          sideSheet: {
            lang: "언어 설정",
            sound: "소리 설정",
            info: "앱 정보",
          },
          mainPage: {
            searchMsg: "찾으시는 작품이 있나요?",
            todayArt: "오늘의 작품",
            goDocent: "해설 보기",
            goCollection: "도감 보기",
          },
          searchPage: {
            artList: "작품 목록",
          },
          collectionPage: {
            collection: "{{tabName.firstko}}",
            challenge: "{{tabName.secondko}}",
            challengeTitle: "도전과제",
            challengeCompleteTitle: "완성한 도전과제",
            badgesTitle: "보유한 뱃지",
            noBadge1: "보유한 뱃지가 없어요!",
            noBadge2: "해설을 보고 뱃지를 모아보세요",
          },
          myPage: {
            alert: "알림 및 소리",
            account: "계정",
            info: "앱 정보",
          },
          DocentPage: {
            partTitle: "부분들을 모두 모아 작품을 완성하세요",
            badgeComplete: "뱃지를 획득했어요!",
            badgeInfo1: "조각을 {{leftPart}}개 더 모으면",
            badgeInfo2: "{{badgeName}}를 완성할 수 있어요!",
            btnTxt: "전체 해설 보기",

            Detail: {
              btnTxt: "부분 찾으러 가기",
            },

            Exp: {
              lockedMsg1: "잠긴 부분입니다",
              lockedMsg2: "숨겨진 조각을 찾아보세요!",
            },
          },
          settingPage: {
            langNow: "현재 설정 언어는 {{lang}}입니다",
            logOut: "로그아웃",
            deleteAccount: "회원 탈퇴",
          },
        },
      },
    },
  });

export default i18n;
