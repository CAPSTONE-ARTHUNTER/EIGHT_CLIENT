import styled from "styled-components";
import SearchBox from "../components/Common/SearchBox";
import SizedBox from "../components/Common/SizedBox";
import UserBox from "../components/MainPage/UserBox";
import { colors } from "../styles/color";
import { useNavigate } from "react-router-dom";
import TodayBox from "../components/MainPage/TodayBox";
import typo from "../styles/typo";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Layout>
      <SizedBox height={20} />

      <Container>
        <SearchBox t={t} />
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
          <SizedBox height={12} />
          <TodayRail>
            {/* 정보 받아서 map */}
            <TodayBox t={t} />
            <TodayBox t={t} />
            <TodayBox t={t} />
          </TodayRail>
          <SizedBox height={60} />
        </TodayWrapper>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
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
  border-radius: 24px;
`;
const MainCollectionBtn = styled.div`
  display: flex;
  width: 40%;
  align-self: stretch;
  background-color: ${colors.beige};
  border-radius: 24px;
`;
const TodayRail = styled.div`
  display: flex;
  width: 100%;
  height: 260px;
  align-items: flex-start;
  gap: 12px;
  overflow-x: scroll;
`;

export default MainPage;
