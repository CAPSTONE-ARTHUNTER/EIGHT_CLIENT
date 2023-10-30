import React, { useEffect } from "react";
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
import { serverLoggedAxios } from "../api";
import inwang from "../assets/image/Inwang.jpg";

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

  // 도감 정보
  const [collectionData, setCollectionData] = useState([
    {
      relic_id: -1,
      relic_image: inwang,
      found: false,
    },
  ]);

  function makeCollectionData(totalRelicNum, solvedRelicList) {
    // init array
    const collectionArr = Array.from({ length: totalRelicNum }, (x, idx) => {
      return {
        relic_id: idx + 1,
        relic_image: inwang,
        found: false,
      };
    });
    // put data if in solvedRelicList
    if (solvedRelicList.length > 0) {
      solvedRelicList.map((data, idx) => {
        const dataMod = {
          relic_id: data.relicId,
          relic_image: data.relicImage,
          found: true,
        };
        collectionArr[idx] = dataMod;
        return 0;
      });
    }
    setCollectionData(collectionArr);
  }

  useEffect(() => {
    serverLoggedAxios
      .get("/app/collection")
      .then((res) => {
        makeCollectionData(
          res.data.data.totalRelicNum,
          res.data.data.solvedRelicList
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            {collectionData.map((data, idx) => {
              return (
                <CollectionBox
                  key={"collectionDataRelicId" + data.relic_id}
                  found={data.found}
                  num={`${idx + 1}`.padStart(3, "0")}
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
