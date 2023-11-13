import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Collection from "./pages/Collection";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import LanguagePage from "./pages/setting/LanguagePage";
import Docent from "./pages/docent/Docent";
import DocentDetail from "./pages/docent/DocentDetail";
import DocentExp from "./pages/docent/DocentExp";
import LogInPage from "./pages/LogInPage";
import DocentCam from "./pages/docent/DocentCam";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./components/PrivateRoutes";
import DetectOcr from "./pages/DetectOcr";
import AccountPage from "./pages/setting/AccountPage";
import GetLogin from "./pages/GetLogin";
import Detection from "./pages/Detection";
import GPTDocent from "./pages/docent/GPTDocent";

const lngs = {
  en: { nativeName: "English" },
  ko: { nativeName: "한국어" },
};

const sampleData = [
  {
    name: "인왕제색도",
    id: 1,
    solvedGage: 2,
    entireGage: 4,
    desc: "인왕제색도에 대한 짧은 설명",
    quest: [
      {
        id: 1,
        content: "정선에게 특별했던 작품, <인왕제색도>",
        solved: true,
        contentDetail:
          "<인왕제색도> 오른쪽에 짤막한 글이 있습니다. 첫 줄의 “인왕제색(仁王霽色)”은 “인왕산 비가 개다”이고, 다음 줄의 “겸재(謙齋)”는 정선의 호를 쓴 것이고, 마지막 줄의 “신미 윤월 하완(辛未閏月下浣)”은 “신미년(1751년) 윤5월(양력 7월) 하순”이라는 내용입니다. “겸재” 아래에는 이름인 “정선(鄭敾)”과 자(字)인 “원백(元伯)”을 새긴 도장이 찍혀 있습니다. 화가 스스로 무엇을 누가 언제 그렸는지 친절하게 밝혀놓았습니다. 세로 79.2cm, 가로 138.0cm로, 조선 회화 중 규모가 큰 편인 이 그림은 크기와 높은 완성도, 화가가 직접 쓴 글로 보았을 때 정선에게 매우 중요한 작품이었을 것입니다.",
      },
      {
        id: 2,
        content: "<인왕제색도>에 표현된 공간감과 실체감",
        solved: false,
        contentDetail:
          "<인왕제색도>는 한국 전통 회화를 대표하는 작품으로 평가받습니다. 왜 그럴까요? 그 이유를 한마디로 설명하기 어렵습니다. 대상을 놀랍도록 똑같이 그린 것도 아니고, 붓놀림이 정교하거나 현란하지도 않고, 그림에 눈길을 끄는 세부 요소도 없습니다. 그런데도 <인왕제색도>에 매료되는 이유는 공간감과 실체감, 그리고 먹의 깊이 때문이 아닐까 합니다.그림 앞에 서면 내 앞에 산이 펼쳐진 듯 가상의 공간이 만들어집니다. 화면 아래쪽 안개구름을 따라가다 고개를 들면 우뚝 솟은 검은 바위가 눈에 들어옵니다. 바로 338.2m 높이의 인왕산 주봉인 치마바위입니다. 그림에서 느껴지는 인왕산 규모는 인근에서 인왕산을 바라봤을 때의 느낌과 크게 다르지 않습니다. 웅장한 인왕산이 가까이 다가오는 느낌을 잘 살렸습니다. 정선은 진한 먹을 묻힌 붓을 여러 차례 쓱쓱 그어 내려 치마바위를 표현했습니다. 검게 칠해 물기 머금은 상태로 표현함으로써 바위의 존재감을 드러내려고 했을 것입니다. 높고 낮음이 반복된 치마바위 주변 산세 표현도 거침이 없습니다. 먹물을 묻힌 붓질을 덜 하여 바위가 솟아 보이도록 하고, 붓질을 더 하여 그늘진 골짜기를 표현했습니다. 군데군데 나무를 간략하게 그려 넣고 여기저기 점을 찍어 산의 표면을 더 풍부하게 했습니다. 물기 많은 붓을 때로는 부드럽게, 때로는 거칠게 다루면서 화면에 공간과 깊이를 연출했습니다. <인왕제색도>를 한참 바라보면, 정선의 그림을 놓고 “건장하고 웅혼하며 끝없이 넓고 원기 왕성하다(壯健雄渾浩汗淋漓)”라고 평한 『송천필담(松泉筆談)』의 기록에 고개를 끄덕이게 됩니다. 그림이 그려진 지 270년이 지났는데도 산세를 표현한 기세가 살아 있습니다. 조금 과장해서 말하면, 안개구름에 싸인 산이 살아 움직이는 듯합니다. 그림 아래쪽에 있는 집 집 주변을 감싸며 산허리까지 차 있는 안개구름도 금방 몽글몽글 피어오를 것 같습니다. 바로 이 점이 <인왕제색도>의 매력입니다.",
      },
      {
        id: 3,
        content: "<인왕제색도> 속 인왕산 명소",
        solved: true,
        contentDetail: "dsfdsfds",
      },
      {
        id: 4,
        content: "정선이 <인왕제색도>를 그린 이유",
        solved: false,
        contentDetail: "dsfdsfds",
      },
    ],
  },
  {
    name: "아아아앙아",
    id: 2,
    solvedGage: 1,
    entireGage: 2,
    desc: "짧은 설명",
    quest: [
      {
        id: 1,
        content: "세부예시1",
        solved: true,
        contentDetail: "안녕하세요",
      },
      {
        id: 2,
        content: "세부예시2",
        solved: false,
        contentDetail: "반갑습니다!",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/login/oauth2/code/google" element={<GetLogin />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/collection"
            element={<Collection sampleData={sampleData} />}
          />
          <Route path="/detection" element={<DetectOcr />} />
          <Route path="/detectPart" element={<Detection />} />
          <Route path="/search" element={<SearchPage artList={sampleData} />} />
          <Route path="/mypage" element={<MyPage />} />

          {/* Docent */}
          <Route
            path="/docent/:artId"
            element={<Docent artInfo={sampleData} />}
          />
          <Route
            path="/docent/:artId/exp"
            element={<DocentExp artInfo={sampleData} />}
          />
          <Route
            path="/docent/:artId/exp"
            element={<DocentExp artInfo={sampleData} />}
          />
          <Route
            path="/docent/:artId/detail/:detailId"
            element={<DocentDetail artInfo={sampleData} />}
          />
          <Route
            path="/docent/:artId/detail/:detailId/detect"
            element={<DocentCam artInfo={sampleData} />}
          />
          <Route
            path="/gptdocent"
            element={<GPTDocent/>}
          />

          {/* setting pages */}
          <Route path="/language" element={<LanguagePage lngs={lngs} />} />
          <Route path="/account" element={<AccountPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
