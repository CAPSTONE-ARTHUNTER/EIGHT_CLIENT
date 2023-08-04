import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Detection from "./pages/Detection";
import Collection from "./pages/Collection";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import LanguagePage from "./pages/setting/LanguagePage";
import Docent from "./pages/docent/Docent";
import { sampleData } from "./assets/exampleData";
import DocentDetail from "./pages/docent/DocentDetail";
import DocentExp from "./pages/docent/DocentExp";

const lngs = {
  en: { nativeName: "English" },
  ko: { nativeName: "한국어" },
};

function App() {
  return (
    <>
      <Routes>
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
