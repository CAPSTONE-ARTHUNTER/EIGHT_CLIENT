import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Detection from "./pages/Detection";
import Collection from "./pages/Collection";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/detection" element={<Detection />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
