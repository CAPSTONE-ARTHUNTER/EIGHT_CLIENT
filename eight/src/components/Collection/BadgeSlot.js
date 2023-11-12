import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";
import SizedBox from "../Common/SizedBox";
import { SadIco } from "../../assets/icon";

const BadgeSlot = ({ t, progressData }) => {
  const solvedBadge = progressData.filter(
    (badge) => badge.partNum - badge.solvedPartNum === 0
  );
  return (
    <Container>
      <typo.body.Body02 color={colors.brown}>
        {t("collectionPage.badgesTitle")}
      </typo.body.Body02>
      <SizedBox height={8} />
      {solvedBadge.length > 0 ? (
        <Rail>
          {solvedBadge.map((badge) => {
            console.log(badge);
            return (
              <img
                className="badge"
                key={badge.relicId + "progressBadge"}
                src={badge.badgeImage}
                alt="badge"
              />
            );
          })}
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
