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

const Docent = ({ artInfo }) => {
  const { t } = useTranslation();
  const [artImgHeight, setArtImageHeight] = useState(0);
  const leftPart = artInfo.entireGage - artInfo.solvedGage;
  const done = leftPart <= 0 ? true : false;

  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  return (
    <Layout text={artInfo.name}>
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

        <typo.body.Body02 style={{ paddingLeft: "8px" }}>
          {t("DocentPage.partTitle")}
        </typo.body.Body02>
        <SizedBox height={8} />
        <BtnWrapper>
          <PartPageBtn artInfo={artInfo.quest} />
        </BtnWrapper>

        <SizedBox height={56} />
        <GetBadgeInfo
          done={done}
          leftPart={leftPart}
          badgeName={artInfo.name}
          t={t}
        />

        <SizedBox height={56} />
        <WideBtn
          text={t("DocentPage.btnTxt")}
          onClick={() => {
            console.log("hehe");
            // 세부페이지로 라우팅
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
  flex-wrap: wrap;
`;

export default Docent;
