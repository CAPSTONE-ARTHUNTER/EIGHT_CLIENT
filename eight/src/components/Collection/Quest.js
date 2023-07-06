import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { badge_chip } from "../../assets/image/badge";
import { CheckIco, DropDownIco } from "../../assets/icon";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";

const Quest = ({ props }) => {
  const [title, setTitle] = useState(props.name);
  const [solvedGage, setSolvedGage] = useState(props.solvedGage);
  const [entireGage, setEntireGage] = useState(props.entireGage);
  const [questPart, setQuestPart] = useState(props.quest);

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    setTitle(props.name);
    setSolvedGage(props.solvedGage);
    setEntireGage(props.entireGage);
    setQuestPart(props.quest);
  }, [props]);

  return (
    <>
      <Background>
        <img className="badge" src={badge_chip} />
        <Wrapper>
          <typo.body.Body01>{title}</typo.body.Body01>
          <SizedBox height={4} />
          {/* 레벨바 */}
          <LevelbarWrapper>
            <LevelBarRail />
            <LevelBar
              width={`${(solvedGage / entireGage) * 100 * (180 / 100)}px`}
            />
          </LevelbarWrapper>
          <SizedBox height={2} />
          <typo.body.Body03 className="progress">
            {solvedGage}/{entireGage}
          </typo.body.Body03>
        </Wrapper>
        <TouchArea
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          {dropDown === false ? (
            <DropDownIco />
          ) : (
            <DropDownIco className="reverse" />
          )}
        </TouchArea>
      </Background>

      {/* dropDown 내려간 경우 보이는 세부 창 */}
      {dropDown === true && (
        <QuestPartRowWrapper>
          <SizedBox width={4} />
          <QuestPartBar />
          <QuestPartBox>
            {questPart.map((part) => {
              return <QuestPart part={part} />;
            })}
          </QuestPartBox>
        </QuestPartRowWrapper>
      )}
    </>
  );
};

const QuestPart = ({ part }) => {
  return (
    <QuestPartWrapper>
      <typo.body.Body01>{part.content}</typo.body.Body01>
      {part.solved === true ? (
        <CheckIco fill={colors.brown} />
      ) : (
        <CheckIco fill={colors.beige} />
      )}
    </QuestPartWrapper>
  );
};

const Background = styled.div`
  display: flex;
  width: auto;
  height: 66px;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background: ${colors.white};
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);

  .badge {
    height: 50px;
  }
`;

const TouchArea = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  .reverse {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  .progress {
    align-self: flex-end;
  }
`;
const LevelbarWrapper = styled.div`
  width: 180px;
  position: relative;
`;
const LevelBarRail = styled.div`
  width: auto;
  height: 6px;
  border-radius: 6px;
  background-color: ${colors.brown};
`;
const LevelBar = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 6px;
  border-radius: 6px;
  background-color: ${colors.orange};
  position: absolute;
  top: 0;
`;
const QuestPartBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px 12px 0px;
  gap: 8px;
  width: 100%;
`;
const QuestPartBar = styled.div`
  width: 2px;
  height: auto;
  background-color: ${colors.brown};
`;
const QuestPartWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`;
const QuestPartRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;
export default Quest;
