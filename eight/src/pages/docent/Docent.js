import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import inwang from "../../assets/image/Inwang.jpg";
import PartPageBtn from "../../components/docent/PartPageBtn";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import typo from "../../styles/typo";
import GetBadgeInfo from "../../components/docent/GetBadgeInfo";
import WideBtn from "../../components/Common/WideBtn";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Docent = ({ artInfo }) => {
  const { artId } = useParams();
  const navigate = useNavigate();

  // 이전 페이지
  const { state } = useLocation();
  const { prevPage } = state;

  const { t } = useTranslation();
  const [artImgHeight, setArtImageHeight] = useState(0);
  const artPageInfo = artInfo.find((item) => item.id == artId);
  const leftPart = artPageInfo.entireGage - artPageInfo.solvedGage;
  const done = leftPart <= 0 ? true : false;

  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  return (
    <Layout text={artPageInfo.name}>
      <ColWrapper>
        <img
          src={inwang}
          alt="art"
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
          {artPageInfo.quest.map((data) => {
            return (
              <PartPageBtn key={data.id} artInfo={data} prevPage={prevPage} />
            );
          })}
        </BtnWrapper>

        <SizedBox Rheight={"3.5rem"} />
        <GetBadgeInfo
          done={done}
          leftPart={leftPart}
          badgeName={artPageInfo.name}
          t={t}
        />

        <SizedBox Rheight={"3.5rem"} />
        <WideBtn
          text={t("DocentPage.btnTxt")}
          onClick={() => {
            // 전체 해설 페이지로 라우팅
            navigate(`/docent/${artPageInfo.id}/exp`);
          }}
        />
      </ColWrapper>
    </Layout>
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
