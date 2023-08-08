import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Detection from "./pages/Detection";
import Collection from "./pages/Collection";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import LanguagePage from "./pages/setting/LanguagePage";
import Docent from "./pages/docent/Docent";
import DocentDetail from "./pages/docent/DocentDetail";
import DocentExp from "./pages/docent/DocentExp";
import LogInPage from "./pages/LogInPage";

const lngs = {
  en: { nativeName: "English" },
  ko: { nativeName: "한국어" },
};

const sampleData = [
  {
    name: "파교심매도",
    id: 1,
    solvedGage: 7,
    entireGage: 7,
    quest: [
      { content: "정선에게 특별했던 작품, <인왕제색도>", solved: true },
      { content: "<인왕제색도>에 표현된 공간감과 실체감", solved: false },
      { content: "<인왕제색도> 속 인왕산 명소", solved: true },
      { content: "정선이 <인왕제색도>를 그린 이유", solved: false },
    ],
  },
  {
    name: "아아아앙아",
    id: 2,
    solvedGage: 3,
    entireGage: 7,
    quest: [
      { content: "세부예시1", solved: true },
      { content: "세부예시2", solved: false },
    ],
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* 임시 라우팅 */}
        <Route path="/docent" element={<Docent artInfo={sampleData} />} />
        <Route
          path="/docent/detail"
          element={<DocentDetail artInfo={sampleData} />}
        />
        <Route
          path="/docent/exp"
          element={<DocentExp artInfo={sampleData} />}
        />

        {/* setting pages */}
        <Route path="/language" element={<LanguagePage lngs={lngs} />} />
      </Routes>
    </>
  );
}

export default App;
