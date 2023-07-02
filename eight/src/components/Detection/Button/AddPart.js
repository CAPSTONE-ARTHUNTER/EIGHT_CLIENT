import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/color";
import SizedBox from "../../Common/SizedBox";
import { PlusIco } from "../../../assets/icon";
import typo from "../../../styles/typo";

// 임시 이미지
import testImage from "../../../assets/image/Inwang.jpg";

const AddPart = () => {
  const [artTitle, setArtTitle] = useState("artTitle");
  const [partName, setPartName] = useState("partName");
  const [partImg, setPartImg] = useState(testImage);

  return (
    <Background>
      <Wrapper>
        <PartImg partImg={partImg} />
        <SizedBox width={12} />
        <TextGroup>
          <typo.body.Body03>{artTitle}</typo.body.Body03>
          <typo.body.Body02>{partName}</typo.body.Body02>
        </TextGroup>
      </Wrapper>
      <PlusBtn
        onClick={() => {
          console.log("add part");
        }}
      >
        <PlusIco />
      </PlusBtn>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  width: auto;
  height: 68px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 21px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const PartImg = styled.div`
  height: 46px;
  width: 40px;
  background-color: green;
  border-radius: 4px;
  background-image: url(${(props) => props.partImg});
  background-size: cover;
  background-position: center;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlusBtn = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.orange};
  border: none;
`;
export default AddPart;
