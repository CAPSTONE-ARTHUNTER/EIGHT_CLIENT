import React from "react";
import styled from "styled-components";

// 임시 이미지
import testImage from "../../assets/image/Inwang.jpg";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { useNavigate } from "react-router-dom";

const ArtListBox = ({ data, idx }) => {
  const navigate = useNavigate();
  const searchImage = testImage;

  return (
    <BackGround
      searchImage={searchImage}
      onClick={() => {
        navigate(`/docent/${idx}`);
      }}
    >
      <InfoArea>
        <TextGroup>
          <typo.body.Body02 color={colors.white}>{data.name}</typo.body.Body02>
          <SizedBox height={2} />
          <typo.body.Body03 color={colors.white}>{data.desc}</typo.body.Body03>
        </TextGroup>
      </InfoArea>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 48%;
  height: 204px;
  background-image: url(${(props) => props.searchImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  flex-shrink: 0;
  margin-bottom: 16px;
`;
const InfoArea = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(71, 71, 71, 0.4);
  backdrop-filter: blur(4px);

  position: absolute;
  bottom: 0;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export default ArtListBox;
