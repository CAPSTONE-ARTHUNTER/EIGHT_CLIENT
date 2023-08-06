import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import Quest from "./Quest";
import SizedBox from "../Common/SizedBox";

// 샘플
// 뱃지종류 추가 필요
const sampleData = [
  {
    name: "파교심매도",
    solvedGage: 6,
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
    solvedGage: 3,
    entireGage: 7,
    quest: [
      { content: "세부예시1", solved: true },
      { content: "세부예시2", solved: false },
    ],
  },
];

const QuestBox = ({ t }) => {
  return (
    <>
      <RowWrapper>
        <typo.body.Body02 fill={colors.brown}>
          {t("collectionPage.challengeTitle")}
        </typo.body.Body02>
        <typo.body.Body02 fill={colors.brown}>0/15</typo.body.Body02>
      </RowWrapper>
      <SizedBox height={8} />
      <QuestWrapper>
        {sampleData.map((data) => {
          return <Quest props={data} />;
        })}
      </QuestWrapper>
    </>
  );
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const QuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export default QuestBox;
