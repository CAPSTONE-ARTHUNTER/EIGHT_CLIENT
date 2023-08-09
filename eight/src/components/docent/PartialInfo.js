import React from "react";
import styled from "styled-components";
import { LockedIco, PlayIco, PuzzleIco } from "../../assets/icon";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";

const PartialInfo = ({ artInfo, t }) => (
  <Container>
    <RowWrapper>
      <ColWrapper>
        {artInfo.solved ? (
          <PuzzleIco fill={colors.brown} />
        ) : (
          <PuzzleIco fill={colors.copper1} />
        )}
        <SizedBox Rheight={".5rem"} />
        {artInfo.solved && (
          <TouchArea
            onClick={() => {
              console.log("play");
            }}
          >
            <PlayIco />
          </TouchArea>
        )}
      </ColWrapper>
      <ColWrapper style={{ width: "100%" }}>
        <TitleBox>
          <typo.body.Body01>{artInfo.content}</typo.body.Body01>
        </TitleBox>
        <SizedBox Rheight={".5rem"} />

        <BodyBox>
          {/* 잠긴 부분입니다 */}
          {!artInfo.solved && (
            <BlockWindow>
              <LockedIco />
              <SizedBox Rheight={"0.75rem"} />
              <typo.body.Body02>
                {t("DocentPage.Exp.lockedMsg1")}
              </typo.body.Body02>
              <typo.body.Body01>
                {t("DocentPage.Exp.lockedMsg2")}
              </typo.body.Body01>
            </BlockWindow>
          )}
          <typo.body.DocentContent>
            {artInfo.contentDetail}
          </typo.body.DocentContent>
        </BodyBox>
      </ColWrapper>
      <SizedBox Rwidth={"1rem"} />
    </RowWrapper>
    <SizedBox Rheight={"3rem"} />
  </Container>
);

const Container = styled.div`
  width: 100%;
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;
const TitleBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 1px solid ${colors.brown};
  background: ${colors.white};
`;
const TouchArea = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BodyBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BlockWindow = styled.div`
  width: 104%;
  height: 100%;
  border-radius: 0.75rem;
  background: rgba(243, 243, 243, 0.4);
  backdrop-filter: blur(0.4rem);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PartialInfo;
