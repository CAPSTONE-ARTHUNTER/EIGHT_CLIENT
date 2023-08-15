import React, { useState } from "react";
import styled from "styled-components";
// 임시 이미지
import testImage from "../../assets/image/Inwang.jpg";
import { CheckIco } from "../../assets/icon";

const Target = () => {
  const [partImage, setPartImage] = useState(testImage);
  const [partDone, setPartDone] = useState(false);
  return (
    <BackGround partImage={partImage}>{partDone && <CheckIco />}</BackGround>
  );
};

const BackGround = styled.div`
  height: 60px;
  width: 52px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${(props) => props.partImage});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export default Target;
