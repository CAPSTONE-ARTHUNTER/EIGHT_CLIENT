import React from "react";
import SizedBox from "../components/Common/SizedBox";
import UserBox from "../components/MainPage/UserBox";
import CollectionTab from "../components/Collection/CollectionTab";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import SearchBox from "../components/Common/SearchBox";
import CollectionBox from "../components/Collection/CollectionBox";
import styled from "styled-components";
import BadgeSlot from "../components/Collection/BadgeSlot";
import QuestBox from "../components/Collection/QuestBox";
import { useTranslation } from "react-i18next";

const Collection = () => {
  // 0: 도감, 1: 도전과제
  const [tabState, setTabState] = useState(0);
  const { t } = useTranslation();
  const tabName = {
    firstko: "도감",
    secondko: "도전과제",
    firsten: "Collection",
    seconden: "Challenge",
  };

  // 유저의 작품 정보
  const userArtInfo = [
    { title: "asdf", found: false },
    { title: "asdf", found: true },
    { title: "asdf", found: true },
    { title: "asdf", found: false },
    { title: "asdf", found: false },
    { title: "asdf", found: true },
    { title: "asdf", found: false },
    { title: "asdf", found: true },
    { title: "asdf", found: false },
    { title: "asdf", found: false },
  ];

  const sampleData = [
    {
      name: "파교심매도",
      id: 1,
      solvedGage: 7,
      entireGage: 7,
      quest: [
        { content: "정선에게 특별했던 작품, <인왕제색도>", solved: true },
        { content: "<인왕제색도>에 표현된 공간감과 실체감", solved: false },
        { content: "<인왕제색도> 속 인왕산 명소", solved: true },
        { content: "정선이 <인왕제색도>를 그린 이유", solved: false },
      ],
    },
    {
      name: "아아아앙아",
      id: 2,
      solvedGage: 3,
      entireGage: 7,
      quest: [
        { content: "세부예시1", solved: true },
        { content: "세부예시2", solved: false },
      ],
    },
  ];

  return (
    <Layout text={"도감"}>
      <SizedBox height={8} />
      <CollectionTab
        tabName={tabName}
        tabState={tabState}
        setTabState={setTabState}
        t={t}
      />
      <SizedBox height={12} />
      {tabState === 0 ? (
        <>
          <UserBox t={t} />
          <SizedBox height={32} />
          <CollectionBoxWrapper>
            {userArtInfo.map((data, index) => {
              return (
                <CollectionBox
                  key={data.title + index}
                  found={data.found}
                  num={`${index + 1}`.padStart(3, "0")}
                />
              );
            })}
          </CollectionBoxWrapper>
        </>
      ) : (
        <ChallengeBoxWrapper>
          <BadgeSlot t={t} />
          <QuestBox sampleData={sampleData} t={t} />
        </ChallengeBoxWrapper>
      )}
    </Layout>
  );
};

const CollectionBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;

const ChallengeBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Collection;
