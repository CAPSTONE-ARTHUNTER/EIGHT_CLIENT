import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";
import { CameraIco, CollectionIco } from "../../assets/icon";
import SizedBox from "./SizedBox";
import { useLocation } from "react-router-dom";

const WideBtn = ({ text, onClick, bgCol }) => {
  let IconComponent = null;
  const location = useLocation().pathname;

  // Determine the icon component based on the 'icon' prop value
  switch (location) {
    case "/docent":
      IconComponent = CollectionIco;
      break;
    case "/detail":
      IconComponent = CameraIco;
      break;
    default:
      break;
  }

  return (
    <BackGround onClick={onClick} bgCol={bgCol}>
      {IconComponent && (
        <>
          <IconComponent fill={!bgCol ? colors.white : colors.brown} />
          <SizedBox width={8} />
        </>
      )}
      <typo.body.Body02 color={!bgCol ? colors.white : colors.brown}>
        {text}
      </typo.body.Body02>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 50px;
  background-color: ${(props) => (props.bgCol ? props.bgCol : colors.brown)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default WideBtn;
