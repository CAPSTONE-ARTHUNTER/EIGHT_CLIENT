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
import collectionBtn from "../assets/image/collectionBtn.png";
import cameraBtn from "../assets/image/cameraBtn.png";

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
          {/* 카메라 버튼 */}
          <MainBtn
            type={"camera"}
            onClick={() => {
              navigate("/detection");
            }}
          >
            <BtnContent>
              <typo.title.Title02>카메라로 찾기</typo.title.Title02>
            </BtnContent>
          </MainBtn>

          {/* 도감 버튼 */}
          <MainBtn
            type={"collection"}
            onClick={() => {
              navigate("/collection");
            }}
          >
            <BtnContent>
              <typo.title.Title02
                style={{ width: "3.75rem", wordBreak: "keep-all" }}
              >
                도감 보러가기
              </typo.title.Title02>
            </BtnContent>
          </MainBtn>
        </BtnWrapper>

        <TodayWrapper>
          <typo.title.Title02 style={{ padding: "0 0.5rem" }}>
            {t("mainPage.todayArt")}
          </typo.title.Title02>
          <SizedBox Rheight={"0.25rem"} />
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

const MainBtn = styled.div`
  width: ${(props) => (props.type === "camera" ? "60%" : "40%")};
  display: flex;
  align-self: stretch;
  align-items: flex-end;
  background-image: ${(props) =>
    props.type === "camera" ? `url(${cameraBtn})` : `url(${collectionBtn})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1.5rem;
  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

const BtnContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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
