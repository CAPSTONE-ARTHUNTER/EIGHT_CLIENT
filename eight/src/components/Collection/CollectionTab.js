import React from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";

const CollectionTab = ({ tabName, tabState, setTabState, t }) => {
  return (
    <Container>
      <TouchArea
        onClick={() => {
          setTabState(0);
        }}
      >
        {tabState === 0 ? (
          <typo.body.Body02>
            {t("collectionPage.collection", { tabName })}
          </typo.body.Body02>
        ) : (
          <typo.body.Body02 color={colors.copper2}>
            {t("collectionPage.collection", { tabName })}
          </typo.body.Body02>
        )}
      </TouchArea>
      <PartitionLine />
      <TouchArea
        onClick={() => {
          setTabState(1);
        }}
      >
        {tabState === 1 ? (
          <typo.body.Body02>
            {t("collectionPage.challenge", { tabName })}
          </typo.body.Body02>
        ) : (
          <typo.body.Body02 color={colors.copper2}>
            {t("collectionPage.challenge", { tabName })}
          </typo.body.Body02>
        )}
      </TouchArea>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  left: 0;
`;
const PartitionLine = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${colors.brown};
`;

const TouchArea = styled.div`
  height: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default CollectionTab;
