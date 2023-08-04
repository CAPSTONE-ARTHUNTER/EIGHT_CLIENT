import React from "react";
import Layout from "../../components/Layout/Layout";
import typo from "../../styles/typo";
import SettingBtn from "../../components/mypage/SettingBtn";
import styled from "styled-components";
import SizedBox from "../../components/Common/SizedBox";
import { useTranslation } from "react-i18next";

const LanguagePage = ({ lngs }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout text="언어 설정">
      <SizedBox height={32} />
      <Container>
        <typo.title.Title02>
          현재 설정 언어는 {i18n.language}입니다
        </typo.title.Title02>
      </Container>
      <SizedBox height={60} />
      <Container>
        {Object.keys(lngs).map((lng) => (
          <SettingBtn
            key={lng}
            text={lngs[lng].nativeName}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
            checked={i18n.language === lng ? true : false}
          />
        ))}
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
