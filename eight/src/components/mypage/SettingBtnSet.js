import React from "react";
import styled from "styled-components";
import SettingBtn from "./SettingBtn";

const SettingBtnSet = ({ t }) => {
  return (
    <Container>
      <SettingBtn text={t("myPage.alert")} />
      <SettingBtn text={t("myPage.account")} />
      <SettingBtn text={t("myPage.info")} />
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
