import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { CheckIco, DropDownIco } from "../../assets/icon";
import { useLocation } from "react-router-dom";
import { colors } from "../../styles/color";
const SettingBtn = ({ text, checked, onClick }) => {
  const location = useLocation().pathname;
  return (
    <BtnContainer>
      <typo.body.Body02>{text}</typo.body.Body02>
      <TouchArea
        onClick={onClick}
      >
        {location === "/language" ? (
          <>{checked === true ? <CheckIco fill={colors.brown} /> : null}</>
        ) : (
          <DropDownIco className="moreBtn" />
        )}
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
