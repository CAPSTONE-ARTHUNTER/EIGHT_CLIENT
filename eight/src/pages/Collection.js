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

const Collection = ({ sampleData }) => {
  // 0: 도감, 1: 도전과제
  const [tabState, setTabState] = useState(0);
  const { t } = useTranslation();
  const tabName = {
    firstko: "도감",
    secondko: "진행 상황",
    firsten: "Collection",
    seconden: "Progress",
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
    <Layout text={t("header.collectionPage")}>
      <SizedBox Rheight={".5rem"} />
      <CollectionTab
        tabName={tabName}
        tabState={tabState}
        setTabState={setTabState}
        t={t}
      />
      <SizedBox Rheight={"0.75rem"} />
      {tabState === 0 ? (
        <>
          <UserBox t={t} />
          <SizedBox Rheight={"2rem"} />
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
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.5rem;
`;

const ChallengeBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Collection;
