import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";
import { CameraIco, CollectionIco, HomeIco, MoreIco } from "../../assets/icon";
import SizedBox from "./SizedBox";

const WideBtn = ({ icon, text }) => {
  let IconComponent = null;

  // Determine the icon component based on the 'icon' prop value
  switch (icon) {
    case "collection":
      IconComponent = CollectionIco;
      break;
    case "camera":
      IconComponent = CameraIco;
      break;
    default:
      break;
  }

  return (
    <BackGround>
      {IconComponent && (
        <>
          <IconComponent fill={colors.white} />
          <SizedBox width={8} />
        </>
      )}
      <typo.body.Body02 color={colors.white}>{text}</typo.body.Body02>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 50px;
  background-color: ${colors.brown};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default WideBtn;
