import React from "react";
import styled from "styled-components";
import { badge_wolf } from "../../assets/image/badge";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";

const GetBadgeInfo = ({ done, leftPart, badgeName }) => {
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
          <typo.body.Body02>조각을 {leftPart}개 더 모으면</typo.body.Body02>
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
