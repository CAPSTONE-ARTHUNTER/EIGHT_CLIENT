import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { badge_wolf } from "../../assets/image/badge";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";

const GetBadgeInfo = ({ props }) => {
  const [badgeName, setBadgeName] = useState(props.name);
  const [leftParts, setLeftParts] = useState(
    props.entireGage - props.solvedGage
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    setBadgeName(props.name);
    setLeftParts(props.entireGage - props.solvedGage);

    // 총 부분 개수 - 완성한 부분의 개수가 0개 초과면 완성되지 않음
    // 0개 이하면 완성으로 간주
    if (props.entireGage - props.solvedGage <= 0) {
      console.log("done");
      setDone(true);
    } else {
      setDone(false);
    }
  }, [props]);

  return (
    <Container>
      <img src={badge_wolf} alt="wolfBadge" className="badge" />
      <SizedBox height={20} />
      {done ? (
        <>
          <typo.body.Body02>{badgeName}</typo.body.Body02>
          <typo.body.Body02>뱃지를 획득했어요!</typo.body.Body02>
        </>
      ) : (
        <>
          <typo.body.Body02>조각을 {leftParts}개 더 모으면</typo.body.Body02>
          <typo.body.Body02>{badgeName}를 완성할 수 있어요!</typo.body.Body02>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .badge {
    width: 50px;
  }
`;

export default GetBadgeInfo;
