import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import typo from "../../styles/typo";
import SettingBtn from "../../components/mypage/SettingBtn";
import styled from "styled-components";
import SizedBox from "../../components/Common/SizedBox";

const LanguagePage = () => {
  const [lang, setLang] = useState("en");

  return (
    <Layout text="언어 설정">
      <SizedBox height={32} />
      <Container>
        <typo.title.Title02>현재 설정 언어는 한국어입니다</typo.title.Title02>
      </Container>
      <SizedBox height={60} />
      <Container>
        <SettingBtn text={"영어"} checked={lang === "en" ? true : false} />
        <SettingBtn text={"한국어"} checked={lang === "ko" ? true : false} />
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;
export default LanguagePage;
