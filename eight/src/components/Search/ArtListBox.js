import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 임시 이미지
import testImage from "../../assets/image/Inwang.jpg";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { translate } from "../../api/GoogleTranslate.apis";

const ArtListBox = ({ data }) => {
  const navigate = useNavigate();
  const searchImage = testImage;
  const [dataDesc, setDataDesc] = useState(data.desc);

  // 언어 ko 아닌 경우 description 영어로 번역
  useEffect(() => {
    if (i18n.language !== "ko") {
      translate(data.desc, "en").then((res) => {
        setDataDesc(res);
      });
    }
  }, []);

  return (
    <BackGround
      searchImage={searchImage}
      onClick={() => {
        navigate(`/docent/${data.id}`, { state: { prevPage: "search" } });
      }}
    >
      <InfoArea>
        <TextGroup>
          <typo.body.Body02 color={colors.white}>{data.name}</typo.body.Body02>
          <SizedBox height={2} />
          <typo.body.Body03 color={colors.white}>{dataDesc}</typo.body.Body03>
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
