import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import Quest from "./Quest";
import SizedBox from "../Common/SizedBox";

const QuestBox = ({ sampleData, t }) => {
  let solvedCnt = 0;
  const solvedPart = sampleData.filter(
    (data) => data.entireGage - data.solvedGage <= 0
  );
  const leftPart = sampleData.filter(
    (data) => data.entireGage - data.solvedGage > 0
  );

  return (
    <>
      <RowWrapper>
        <typo.body.Body02>
          {t("collectionPage.challengeTitle")}
        </typo.body.Body02>
        <typo.body.Body02>
          {/* 완료한 도전과제 수 세기 */}
          {sampleData.map((data) => {
            if (data.entireGage - data.solvedGage <= 0) solvedCnt += 1;
            return null;
          })}
          {solvedCnt}/{sampleData.length}
        </typo.body.Body02>
      </RowWrapper>

      <SizedBox Rheight={".5rem"} />

      {/* 도전과제 완성 시 하단으로 내려감 */}
      {/* 미완성 도전과제 렌더링 */}
      {leftPart.length !== 0 ? (
        <QuestWrapper>
          {leftPart.map((data) => {
            return <Quest props={data} key={data.name} />;
          })}
        </QuestWrapper>
      ) : null}

      <SizedBox Rheight={".5rem"} />

      {/* 완성 도전과제 렌더링 */}
      {solvedPart.length !== 0 ? (
        <>
          <Partition />
          <typo.body.Body02>
            {t("collectionPage.challengeCompleteTitle")}
          </typo.body.Body02>
          <QuestWrapper>
            {solvedPart.map((data) => {
              return <Quest props={data} key={data.name} />;
            })}
          </QuestWrapper>
        </>
      ) : null}
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
const Partition = styled.div`
  background-color: ${colors.beige};
  display: block;
  width: 95%;
  height: 0.08rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: center;
`;

export default QuestBox;
