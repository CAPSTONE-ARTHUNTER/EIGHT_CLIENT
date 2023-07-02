import React from "react";
import styled from "styled-components";
import { colors } from "../../../styles/color";
import { CameraIco } from "../../../assets/icon";

const CaptureBtn = () => {
  return (
    <Background
      onClick={() => {
        console.log("Capture!");
      }}
    >
      <WhitePanel>
        <CameraIco fill={colors.black} />
      </WhitePanel>
    </Background>
  );
};

const Background = styled.button`
  width: 74px;
  height: 74px;
  border-radius: 74px;
  border: none;
  background-color: ${colors.beige};
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const WhitePanel = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 66px;
  background-color: ${colors.lightGrey};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CaptureBtn;
