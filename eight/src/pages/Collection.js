import React from "react";
import SizedBox from "../components/Common/SizedBox";
import UserBox from "../components/MainPage/UserBox";
import CollectionTab from "../components/Collection/CollectionTab";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import CollectionBox from "../components/Collection/CollectionBox";
import styled from "styled-components";
import BadgeSlot from "../components/Collection/BadgeSlot";
import QuestBox from "../components/Collection/QuestBox";
import { useTranslation } from "react-i18next";

const Collection = ({sampleData}) => {
  // 0: 도감, 1: 도전과제
  const [tabState, setTabState] = useState(0);
  const { t } = useTranslation();
  const tabName = {
    firstko: "도감",
    secondko: "도전과제",
    firsten: "Collection",
    seconden: "Challenge",
  };

  // 전체 작품 정보
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
