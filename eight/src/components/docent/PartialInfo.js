import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LockedIco, PlayIco, PuzzleIco } from "../../assets/icon";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";

const PartialInfo = ({ props }) => {
  //임시
  const [title, setTitle] = useState(props.quest[0].title);
  const [body, setBody] = useState(props.quest[0].content);
  const [solved, setSolved] = useState(props.quest[0].solved);

  useEffect(() => {
    setTitle(props.quest[0].title);
    setBody(props.quest[0].content);
    setSolved(props.quest[0].solved);
  }, [props]);

  return (
    <Container>
      <RowWrapper>
        <ColWrapper>
          {solved ? (
            <PuzzleIco fill={colors.brown} />
          ) : (
            <PuzzleIco fill={colors.copper1} />
          )}
          <SizedBox height={8} />
          {solved && (
            <TouchArea
              onClick={() => {
                console.log("play");
              }}
            >
              <PlayIco />
            </TouchArea>
          )}
        </ColWrapper>
        <ColWrapper>
          <TitleBox>
            <typo.body.Body01>{title}</typo.body.Body01>
          </TitleBox>
          <SizedBox height={8} />
          <BodyBox>
            {!solved && (
              <BlockWindow>
                <LockedIco />
                <SizedBox height={12} />
                <typo.body.Body02>잠긴 부분입니다</typo.body.Body02>
                <typo.body.Body01>숨겨진 조각을 찾아보세요!</typo.body.Body01>
              </BlockWindow>
            )}
            <typo.body.DocentContent>{body}</typo.body.DocentContent>
          </BodyBox>
        </ColWrapper>
        <SizedBox width={16} />
      </RowWrapper>
    </Container>
  );
};

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
  gap: 10px;
`;
const TitleBox = styled.div`
  display: flex;
  width: auto;
  padding: 10px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${colors.brown};
  background: ${colors.white};
`;
const TouchArea = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BodyBox = styled.div`
  width: auto;
  word-break: keep-all;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockWindow = styled.div`
  width: 104%;
  height: 104%;
  border-radius: 12px;
  background: rgba(243, 243, 243, 0.4);
  backdrop-filter: blur(6px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default PartialInfo;
