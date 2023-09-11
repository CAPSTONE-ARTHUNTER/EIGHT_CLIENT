import React from "react";
import Layout from "../../components/Layout/Layout";
import SettingBtn from "../../components/mypage/SettingBtn";
import { colors } from "../../styles/color";
import Profile from "../../components/mypage/Profile";
import SizedBox from "../../components/Common/SizedBox";
import styled from "styled-components";
import { t } from "i18next";

const AccountPage = () => {
  const exampleData = {
    userName: "rryu09",
    userEmail: "rryu09@ewhain.net",
  };
  return (
    <Layout text={t("header.settings.account")}>
      <SizedBox Rheight={"1.25rem"} />
      <Profile userInfo={exampleData} />
      <SizedBox Rheight={"0.75rem"} />
      <PartitionLine />
      <SizedBox Rheight={"2rem"} />
      <SettingBtn text={t("settingPage.logOut")} textColor={colors.black} />
      <SettingBtn
        text={t("settingPage.deleteAccount")}
        textColor={colors.red}
      />
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
export default AccountPage;
