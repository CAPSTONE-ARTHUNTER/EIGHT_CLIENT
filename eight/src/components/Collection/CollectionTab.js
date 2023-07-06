import React, { useState } from "react";
import styled from "styled-components";
import typo from "../../styles/typo";
import { colors } from "../../styles/color";

const CollectionTab = () => {
  // 0: 도감, 1: 도전과제
  const [tabState, setTabState] = useState(0);
  return (
    <Container>
      <TouchArea
        onClick={() => {
          setTabState(0);
        }}
      >
        {tabState === 0 ? (
          <typo.body.Body02>도감</typo.body.Body02>
        ) : (
          <typo.body.Body02 color={colors.copper2}>도감</typo.body.Body02>
        )}
      </TouchArea>
      <PartitionLine />
      <TouchArea
        onClick={() => {
          setTabState(1);
        }}
      >
        {tabState === 1 ? (
          <typo.body.Body02>도전과제</typo.body.Body02>
        ) : (
          <typo.body.Body02 color={colors.copper2}>도전과제</typo.body.Body02>
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
