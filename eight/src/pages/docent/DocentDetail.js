import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { PointIco, PuzzleIco } from "../../assets/icon";
import { colors } from "../../styles/color";
import inwang from "../../assets/image/Inwang.jpg";
import typo from "../../styles/typo";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import WideBtn from "../../components/Common/WideBtn";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const DocentDetail = ({ artInfo }) => {
  const { id } = useParams();
  const { detailId } = useParams();
  const { t } = useTranslation();
  const [artImgHeight, setArtImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  return (
    <Layout text={artInfo[id].name}>
      <SizedBox height={24} />

      <ColWrapper>
        {/* 퍼즐모양 */}
        <TopBox>
          <PuzzleIco fill={colors.brown} />
          <SizedBox Rheight={".5rem"} />
          <typo.body.Body01>
            {artInfo[id].quest[detailId].content}
          </typo.body.Body01>
        </TopBox>
        <SizedBox Rheight={"2rem"} />
      </ColWrapper>

      {/* 이미지 */}
      <ColWrapper>
        <img
          src={inwang}
          alt="art"
          className="artImg"
          onLoad={handleImageLoad}
        />
        <SizedBox height={artImgHeight} />
        <SizedBox Rheight={"2rem"} />
      </ColWrapper>

      {/* 수집한 부분 수 표시 */}
      <ColWrapper>
        {/* 세부정보 받아와 처리 */}
        <RowWrapper style={{ gap: "12px" }}>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </RowWrapper>
        <SizedBox height={12} />
        <typo.body.Body02>0/4</typo.body.Body02>
        <SizedBox height={24} />

        <TxtBox>
          <WideBtn text={t("DocentPage.Detail.btnTxt")} />
          <SizedBox height={32} />

          {/* 텍스트 제목 */}
          <RowWrapper>
            <PointIco fill={colors.orange} />
            <SizedBox width={8} />
            <typo.body.Body02>
              {artInfo[id].quest[detailId].content}
            </typo.body.Body02>
          </RowWrapper>
          <SizedBox height={16} />

          {/* 텍스트 바디 */}
          <typo.body.DocentContent>
            {artInfo[id].quest[detailId].contentDetail}
          </typo.body.DocentContent>
        </TxtBox>
      </ColWrapper>
    </Layout>
  );
};

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .artImg {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  align-items: center;
  word-break: keep-all;
  text-align: center;
`;

const TxtBox = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
  word-break: keep-all;
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${colors.copper1};
`;

export default DocentDetail;
