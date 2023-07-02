import React from "react";
import styled from "styled-components";
import { colors } from "../../../styles/color";
import typo from "../../../styles/typo";
import { ArrowIco } from "../../../assets/icon";
import SizedBox from "../../Common/SizedBox";

const FinishBtn = () => {
  return (
    <Background
      onClick={() => {
        console.log("fin");
      }}
    >
      <typo.title.Title02>완료</typo.title.Title02>
      <SizedBox width={18} />
      <ArrowIco />
    </Background>
  );
};

const Background = styled.button`
  border: none;
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;

  background-color: ${colors.orange};
  border-radius: 28px;
`;

export default FinishBtn;
