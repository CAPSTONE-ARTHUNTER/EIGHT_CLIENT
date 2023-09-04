import React from "react";
import Profile from "../components/mypage/Profile";
import SizedBox from "../components/Common/SizedBox";
import styled from "styled-components";
import { colors } from "../styles/color";
import Layout from "../components/Layout/Layout";
import SettingBtnSet from "../components/mypage/SettingBtnSet";
import { useTranslation } from "react-i18next";

const MyPage = () => {
  const { t } = useTranslation();
  // 샘플
  const exampleData = {
    userName: "rryu09",
    userEmail: "rryu09@ewhain.net",
  };
  return (
    <Layout text={t("header.myPage")}>
      <SizedBox Rheight={"1.25rem"} />
      <Profile userInfo={exampleData} />
      <SizedBox Rheight={"0.75rem"} />
      <PartitionLine />
      <SizedBox Rheight={"0.75rem"} />
      <SettingBtnSet t={t} />
    </Layout>
  );
};

const PartitionLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.75rem;
  background-color: ${colors.beige};
`;

export default MyPage;
