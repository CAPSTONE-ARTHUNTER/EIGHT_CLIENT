import React from "react";
import Layout from "../../components/Layout/Layout";
import inwang from "../../assets/image/Inwang.jpg";
import SizedBox from "../../components/Common/SizedBox";
import { useState } from "react";
import styled from "styled-components";
import CollectionTab from "../../components/Collection/CollectionTab";
import typo from "../../styles/typo";
import PartialInfo from "../../components/docent/PartialInfo";

const DocentExp = ({ artInfo }) => {
  // 탭
  const [tabState, setTabState] = useState(0);
  const tabName = { first: "부분별 해설", second: "전체 해설" };

  //   이미지높이
  const [artImgHeight, setArtImageHeight] = useState(0);
  const handleImageLoad = (event) => {
    const imgElement = event.target;
    setArtImageHeight(imgElement.height);
  };

  return (
    <Layout text={artInfo.name}>
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
        />
        <SizedBox height={16} />

        {/* 제목란 */}
        <TitleBox>
          <typo.title.Title01>{artInfo.name}</typo.title.Title01>
          <SizedBox height={4} />
          <typo.body.Body01>
            {/* 수정필요 */}
            정선, 인왕제색도, 조선 1751년, 족자, 종이에 먹, 79.2×138.0cm, 2021년
            이건희 기증, 국보
          </typo.body.Body01>
        </TitleBox>
        <SizedBox height={32} />

        {tabState === 0 ? (
          // 부분별 해설 탭
          <>
            {artInfo.quest.map((data) => {
              return <PartialInfo artInfo={data} />;
            })}
          </>
        ) : (
          // 전체 해설 탭
          <>
            {artInfo.quest.map((data) => {
              return (
                <TitleBox>
                  <typo.body.DocentContent>
                    {data.content}
                  </typo.body.DocentContent>
                  <SizedBox height={24} />
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
  padding: 10px;
  word-break: keep-all;
`;

export default DocentExp;
