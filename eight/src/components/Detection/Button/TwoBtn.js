import React from "react";
import styled from "styled-components";
import typo from "../../../styles/typo";
import { colors } from "../../../styles/color";

const TwoBtn = ({ LB, RB }) => {
  return (
    <BtnWrapper>
      <CancelBtn onClick={LB}>
        <typo.body.Body02 color={colors.white}>취소</typo.body.Body02>
      </CancelBtn>
      <ConfirmBtn onClick={RB}>
        <typo.body.Body02>해설 보기</typo.body.Body02>
      </ConfirmBtn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const CancelBtn = styled.button`
  width: 50%;
  height: 60px;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.brown};
`;
const ConfirmBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.orange};
`;

export default TwoBtn;
