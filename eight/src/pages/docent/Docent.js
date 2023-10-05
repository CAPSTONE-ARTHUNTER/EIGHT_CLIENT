import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import PartPageBtn from "../../components/docent/PartPageBtn";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import typo from "../../styles/typo";
import GetBadgeInfo from "../../components/docent/GetBadgeInfo";
import WideBtn from "../../components/Common/WideBtn";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { serverLoggedAxios } from "../../api";
import { useQuery } from "react-query";

const Docent = () => {
  const { artId } = useParams();
  const navigate = useNavigate();

  // 이전 페이지
  const { state } = useLocation();
  const { prevPage } = state;

  const { t } = useTranslation();
  const [artImgHeight, setArtImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  const puzzlePageInfo = useQuery(
    `puzzleInfo_${artId}`,
    () => serverLoggedAxios.get(`app/artwork/partsinfo/${artId}`),
    {
      staleTime: 300000,
      cacheTime: Infinity,
      enabled: true,
    }
  );
  return (
    <>
      {puzzlePageInfo.isLoading ? (
        <typo.title.Title01>Loading...</typo.title.Title01>
      ) : null}
      {puzzlePageInfo.isFetched ? (
        <Layout text={puzzlePageInfo.data.data.relicName}>
          <ColWrapper>
            <img
              src={puzzlePageInfo.data.data.relicImage}
              alt="relicImage"
              className="artImg"
              onLoad={handleImageLoad}
            />
            {/* 이미지 height만큼 띄우기 */}
            <SizedBox height={artImgHeight} />
            <SizedBox height={24} />

            <typo.body.Body02 style={{ paddingLeft: ".5rem" }}>
              {t("DocentPage.partTitle")}
            </typo.body.Body02>
            <SizedBox Rheight={".5rem"} />
            <BtnWrapper>
              {puzzlePageInfo.data.data.partInfos.map((data) => {
                return (
                  <PartPageBtn
                    key={data.name}
                    artInfo={data}
                    prevPage={prevPage}
                  />
                );
              })}
            </BtnWrapper>

            <SizedBox Rheight={"3.5rem"} />
            <GetBadgeInfo
              done={
                puzzlePageInfo.data.data.totalPartCount -
                  puzzlePageInfo.data.data.totalSolvedPartCount ===
                0
                  ? true
                  : false
              }
              leftPart={
                puzzlePageInfo.data.data.totalPartCount -
                puzzlePageInfo.data.data.totalSolvedPartCount
              }
              badge={puzzlePageInfo.data.data.relicBadgeImage}
              artName={puzzlePageInfo.data.data.relicName}
              t={t}
            />

            <SizedBox Rheight={"3.5rem"} />
            <WideBtn
              text={t("DocentPage.btnTxt")}
              onClick={() => {
                // 전체 해설 페이지로 라우팅
                navigate(`/docent/${artId}/exp`);
              }}
            />
          </ColWrapper>
        </Layout>
      ) : (
        <typo.title.Title01>Nothing</typo.title.Title01>
      )}
    </>
  );
};

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .artImg {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export default Docent;
