import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import MainPage from "./pages/MainPage";
import Detection from "./pages/Detection";
import Collection from "./pages/Collection";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import LanguagePage from "./pages/setting/LanguagePage";

const lngs = {
  en: { nativeName: "English" },
  ko: { nativeName: "한국어" },
};

// import Docent from "./pages/docent/Docent";
// import { sampleData } from "./assets/exampleData";
// import DocentDetail from "./pages/docent/DocentDetail";
// import DocentExp from "./pages/docent/DocentExp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/detection" element={<Detection />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/mypage" element={<MyPage />} />

      {/* setting pages */}
      <Route path="/language" element={<LanguagePage lngs={lngs}/>} />
    </Routes>
    </>
    // <Docent artInfo={sampleData}/>
    // <DocentDetail artInfo={sampleData}/>
    // <DocentExp artInfo = {sampleData}/>
  );
}

export default App;
