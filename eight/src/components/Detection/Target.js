import React from "react";
import styled from "styled-components";
// 임시 이미지
import testImage from "../../assets/image/Inwang.jpg";
import { CheckIco } from "../../assets/icon";
import { colors } from "../../styles/color";

const Target = ({ partDone, selected }) => {
  const partImage = testImage;
  return (
    <BackGround partImage={partImage} selected={selected}>
      {partDone && <CheckIco fill={colors.white} />}
    </BackGround>
  );
};

const BackGround = styled.div`
  height: 60px;
  width: 52px;
  border-radius: 12px;
  border: ${(props) =>
    props.selected ? `${colors.orange} 2px solid` : "none"};

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.partImage});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export default Target;
