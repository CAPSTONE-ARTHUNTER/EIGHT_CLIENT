import React from "react";
import styled from "styled-components";
import { badge_wolf } from "../../assets/image/badge";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";

const GetBadgeInfo = ({ done, leftPart, badge, artName, t }) => {
  return (
    <Container>
      <img src={badge_wolf} alt="wolfBadge" className="badge" />
      <SizedBox height={20} />
      {done ? (
        <>
          <typo.body.Body02>{badge}</typo.body.Body02>
          <typo.body.Body02>{t("DocentPage.badgeComplete")}</typo.body.Body02>
        </>
      ) : (
        <>
          <typo.body.Body02>
            {t("DocentPage.badgeInfo1", { leftPart: leftPart })}
          </typo.body.Body02>
          <typo.body.Body02>
            {t("DocentPage.badgeInfo2", { badgeName: artName })}
          </typo.body.Body02>
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
