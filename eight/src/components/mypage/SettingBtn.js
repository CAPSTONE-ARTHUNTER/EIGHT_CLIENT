import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { DropDownIco } from "../../assets/icon";
const SettingBtn = ({text}) => {
  return (
    <BtnContainer>
      <typo.body.Body02>{text}</typo.body.Body02>
      <TouchArea
        className="moreBtn"
        onClick={() => {
          console.log(text);
        }}
      >
        <DropDownIco />
      </TouchArea>
    </BtnContainer>
  );
};
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
