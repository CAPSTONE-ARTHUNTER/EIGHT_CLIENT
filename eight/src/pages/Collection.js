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

const Collection = () => {
  // 0: 도감, 1: 도전과제
  const [tabState, setTabState] = useState(0);
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

  return (
    <Layout text={"도감"}>
      <SizedBox height={8} />
      <CollectionTab tabState={tabState} setTabState={setTabState} />
      <SizedBox height={12} />
      {tabState === 0 ? (
        <>
          <UserBox />
          <SizedBox height={32} />
          <SearchBox />
          <SizedBox height={24} />
          <CollectionBoxWrapper>
            {userArtInfo.map((data, index) => {
              return (
                <CollectionBox
                  key={data}
                  found={data.found}
                  num={`${index + 1}`.padStart(3, "0")}
                />
              );
            })}
          </CollectionBoxWrapper>
        </>
      ) : (
        <ChallengeBoxWrapper>
          <BadgeSlot />
          <QuestBox />
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
