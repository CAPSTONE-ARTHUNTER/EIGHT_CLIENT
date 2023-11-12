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
import { getProgress } from "../api/Progress";

const Collection = () => {
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
  // 도감 정보
  const [progressData, setProgressData] = useState([
    {
      relicId: 1,
      relicName: "정선필 인왕제색도",
      badgeImage:
        "https://github.com/CAPSTON-EIGHT/EIGHT_SERVER/assets/81066502/3221d160-c20c-420b-b64a-e5448281e08a",
      partNum: 4,
      solvedPartNum: 0,
      partList: [
        {
          partId: 1,
          name: "정선에게 특별했던 작품, <인왕제색도>",
          solved: false,
        },
        {
          partId: 2,
          name: "<인왕제색도>에 표현된 공간감과 실체감",
          solved: false,
        },
        {
          partId: 3,
          name: "<인왕제색도> 속 인왕산 명소",
          solved: false,
        },
        {
          partId: 4,
          name: "정선이 <인왕제색도>를 그린 이유",
          solved: false,
        },
      ],
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
    getProgress()
      .then((res) => {
        setProgressData(res.challengeList);
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
                  dataId={data.relic_id}
                  img={data.relic_image}
                  found={data.found}
                  num={`${idx + 1}`.padStart(3, "0")}
                />
              );
            })}
          </CollectionBoxWrapper>
        </>
      ) : (
        <ChallengeBoxWrapper>
          <BadgeSlot t={t} progressData={progressData} />
          <QuestBox progressData={progressData} t={t} />
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
