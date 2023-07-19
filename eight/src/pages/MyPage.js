import React from "react";
import BottomBar from "../components/Common/BottomBar";
import TopBar from "../components/Common/TopBar";
import Profile from "../components/mypage/Profile";
import SizedBox from "../components/Common/SizedBox";
import styled from "styled-components";
import { colors } from "../styles/color";
import SettingBtn from "../components/mypage/SettingBtn";

const MyPage = () => {
  // 샘플
  const exampleData = {
    userName: "rryu09",
    userEmail: "rryu09@ewhain.net",
  };
  return (
    <div>
      <TopBar text={"마이페이지"} />
      <SizedBox height={56} />
      <Profile userInfo={exampleData} />
      <SizedBox height={12} />
      <PartitionLine />
      <SizedBox height={12} />
      <SettingBtn />
      <BottomBar />
    </div>
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
