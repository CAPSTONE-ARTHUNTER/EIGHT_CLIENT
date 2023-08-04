import React from "react";
import Profile from "../components/mypage/Profile";
import SizedBox from "../components/Common/SizedBox";
import styled from "styled-components";
import { colors } from "../styles/color";
import Layout from "../components/Layout/Layout";
import SettingBtnSet from "../components/mypage/SettingBtnSet";

const MyPage = () => {
  // 샘플
  const exampleData = {
    userName: "rryu09",
    userEmail: "rryu09@ewhain.net",
  };
  return (
    <Layout text={"마이페이지"}>
      <SizedBox height={20} />
      <Profile userInfo={exampleData} />
      <SizedBox height={12} />
      <PartitionLine />
      <SizedBox height={12} />
      <SettingBtnSet />
    </Layout>
  );
};

const PartitionLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 12px;
  background-color: ${colors.beige};
`;

export default MyPage;
