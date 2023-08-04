import React from "react";
import styled from "styled-components";
import SettingBtn from "./SettingBtn";

const SettingBtnSet = () => {
  return (
    <Container>
      <SettingBtn text="알림 및 소리" />
      <SettingBtn text="계정" />
      <SettingBtn text="앱 정보" />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

export default SettingBtnSet;
