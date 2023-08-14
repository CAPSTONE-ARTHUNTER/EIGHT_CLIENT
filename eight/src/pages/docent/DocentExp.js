import React from "react";
import Layout from "../../components/Layout/Layout";
import inwang from "../../assets/image/Inwang.jpg";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import styled from "styled-components";
import CollectionTab from "../../components/Collection/CollectionTab";
import typo from "../../styles/typo";
import PartialInfo from "../../components/docent/PartialInfo";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const DocentExp = ({ artInfo }) => {
  const { t } = useTranslation();
  const params = useParams().id;

  // 탭
  const [tabState, setTabState] = useState(0);
  const tabName = {
    firstko: "부분별 해설",
    secondko: "전체 해설",
    firsten: "Partial Comment",
    seconden: "Entire Comment",
  };
  //   이미지높이
  const [artImgHeight, setArtImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  return (
    <Layout text={artInfo[params].name}>
      <Container>
        <img
          src={inwang}
          alt="art"
          className="artImg"
          onLoad={handleImageLoad}
        />
        {/* 이미지 height만큼 띄우기 */}
        <SizedBox height={artImgHeight + 16} />

        {/* 탭 */}
        <CollectionTab
          tabName={tabName}
          tabState={tabState}
          setTabState={setTabState}
          t={t}
        />
        <SizedBox height={16} />

        {/* 제목란 */}
        <TitleBox>
          <typo.title.Title01>{artInfo[params].name}</typo.title.Title01>
          <SizedBox Rheight={".2rem"} />
          <typo.body.Body01>
            {/* 수정필요 */}
            정선, 인왕제색도, 조선 1751년, 족자, 종이에 먹, 79.2×138.0cm, 2021년
            이건희 기증, 국보
          </typo.body.Body01>
        </TitleBox>
        <SizedBox Rheight={"2rem"} />

        {tabState === 0 ? (
          // 부분별 해설 탭
          <>
            {artInfo[params].quest.map((data, idx) => {
              return <PartialInfo key={idx} idx={params+idx} artInfo={data} t={t} />;
            })}
          </>
        ) : (
          // 전체 해설 탭
          <>
            {artInfo[params].quest.map((data, idx) => {
              return (
                <TitleBox key={'titleBox'+idx}>
                  <typo.body.DocentContent>
                    {data.contentDetail}
                  </typo.body.DocentContent>
                  <SizedBox Rheight={"1.5rem"} />
                </TitleBox>
              );
            })}
          </>
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .artImg {
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
  }
`;
const TitleBox = styled.div`
  padding: 0.6rem;
  /* line-break: anywhere; */
  word-break: keep-all;
`;

export default DocentExp;
