import React from "react";
import styled from "styled-components";
// 임시 이미지
import { CheckIco } from "../../assets/icon";
import { colors } from "../../styles/color";

const Target = ({ partDone, image, selected, onClick }) => {
  return (
    <BackGround partImage={image} selected={selected} onClick={onClick}>
      {partDone && <CheckIco fill={colors.white} />}
    </BackGround>
  );
};

const BackGround = styled.div`
  height: 60px;
  width: 52px;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.selected ? `${colors.orange} 0 0 0 2px inset` : "none"};

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.partImage});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export default Target;
