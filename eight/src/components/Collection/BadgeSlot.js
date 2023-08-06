import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { badge_chip } from "../../assets/image/badge";
import { SadIco } from "../../assets/icon";

const BadgeSlot = ({ badges, t }) => {
  const badgesList = badges;

  return (
    <Container>
      <typo.body.Body02 color={colors.brown}>
        {t("collectionPage.badgesTitle")}
      </typo.body.Body02>
      <SizedBox height={8} />
      {badgesList ? (
        <Rail>
          {/* 배열 받아서 map */}
          <img className="badge" src={badge_chip} alt="badge" />
          <img className="badge" src={badge_chip} alt="badge" />
          <img className="badge" src={badge_chip} alt="badge" />
          <img className="badge" src={badge_chip} alt="badge" />
          <img className="badge" src={badge_chip} alt="badge" />
          <img className="badge" src={badge_chip} alt="badge" />
        </Rail>
      ) : (
        <ColWrapper>
          <SizedBox height={8} />
          <SadIco />
          <SizedBox height={8} />
          <typo.body.Body03>{t("collectionPage.noBadge1")}</typo.body.Body03>
          <typo.body.Body03>{t("collectionPage.noBadge2")}</typo.body.Body03>
        </ColWrapper>
      )}
      <SizedBox height={32} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Rail = styled.div`
  display: inline-flex;
  align-items: center;
  overflow-x: scroll;
  .badge {
    height: 56px;
  }
`;
const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export default BadgeSlot;
