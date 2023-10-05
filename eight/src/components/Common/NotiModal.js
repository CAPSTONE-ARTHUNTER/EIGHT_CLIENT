import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import WideBtn from "./WideBtn";
import { FailIco } from "../../assets/icon";
import typo from "../../styles/typo";
import SizedBox from "./SizedBox";
import { t } from "i18next";

const NotiModal = ({ text, onClick }) => {
  return (
    <ScreenBg>
      <Container>
        <SizedBox Rheight={"1rem"} />
        <TxtContainer>
          <FailIco />
          <SizedBox Rheight={"2rem"} />
          <typo.title.Title02 color={colors.brown}>{text}</typo.title.Title02>
        </TxtContainer>
        <BtnContainer>
          <WideBtn text={t("common.close")} onClick={onClick} />
          <SizedBox Rheight={"2rem"} />
        </BtnContainer>
      </Container>
    </ScreenBg>
  );
};
const ScreenBg = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const TxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnContainer = styled.div`
  width: 90%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 23rem;
  border-radius: 2rem;
  background-color: ${colors.lightGrey};
`;
export default NotiModal;
