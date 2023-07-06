import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { DropDownIco } from "../../assets/icon";

const SettingBtn = () => {
  return (
    <Container>
      <BtnContainer>
        <typo.body.Body02>알림 및 소리</typo.body.Body02>
        <TouchArea
          className="moreBtn"
          onClick={() => {
            console.log("알림 및 소리");
          }}
        >
          <DropDownIco />
        </TouchArea>
      </BtnContainer>
      <BtnContainer>
        <typo.body.Body02>계정</typo.body.Body02>
        <TouchArea
          className="moreBtn"
          onClick={() => {
            console.log("계정");
          }}
        >
          <DropDownIco />
        </TouchArea>
      </BtnContainer>
      <BtnContainer>
        <typo.body.Body02>앱 정보</typo.body.Body02>
        <TouchArea
          className="moreBtn"
          onClick={() => {
            console.log("앱 정보");
          }}
        >
          <DropDownIco />
        </TouchArea>
      </BtnContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;
const BtnContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .moreBtn {
    transform: rotate(270deg);
  }
`;

const TouchArea = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default SettingBtn;
