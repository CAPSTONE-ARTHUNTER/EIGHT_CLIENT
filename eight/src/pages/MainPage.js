import styled from "styled-components";
import typo from "../styles/typo";
import Layout from "../components/Layout/Layout";
import { colors } from "../styles/color";
import SearchBox from "../components/Common/SearchBox";
import SizedBox from "../components/Common/SizedBox";
import UserBox from "../components/MainPage/UserBox";
import TodayBox from "../components/MainPage/TodayBox";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  // searchPage로 검색 텍스트 전달, 이동
  function search(e) {
    setText(e.target.value);
    navigate("/search", { state: text });
    setText("");
  }

  return (
    <Layout>
      <SizedBox Rheight={"1.25rem"} />

      <Container>
        <SearchBox text={text} onChange={onChange} search={search} t={t} />
        <UserBox t={t} />
        <BtnWrapper>
          <MainCameraBtn
            onClick={() => {
              navigate("/detection");
            }}
          />
          <MainCollectionBtn
            onClick={() => {
              navigate("/collection");
            }}
          />
        </BtnWrapper>

        <TodayWrapper>
          <typo.title.Title02 style={{ padding: "0px 8px" }}>
            {t("mainPage.todayArt")}
          </typo.title.Title02>
          <SizedBox Rheight={"0.75rem"} />
          <TodayRail>
            {/* 정보 받아서 map */}
            <TodayBox t={t} />
            <TodayBox t={t} />
            <TodayBox t={t} />
          </TodayRail>
          <SizedBox Rheight={"3.75rem"} />
        </TodayWrapper>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 9.375rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;
const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainCameraBtn = styled.div`
  width: 60%;
  display: flex;
  align-self: stretch;
  background: linear-gradient(152deg, #cfc8bc 0%, #a79c8d 100%);
  border-radius: 1.5rem;
`;
const MainCollectionBtn = styled.div`
  display: flex;
  width: 40%;
  align-self: stretch;
  background-color: ${colors.beige};
  border-radius: 1.5rem;
`;
const TodayRail = styled.div`
  display: flex;
  width: 100%;
  height: 16.25rem;
  align-items: flex-start;
  gap: 0.75rem;
  overflow-x: scroll;
`;

export default MainPage;
