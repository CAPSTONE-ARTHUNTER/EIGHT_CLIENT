import React from "react";
import { NoResultIco } from "../../assets/icon";
import typo from "../../styles/typo";
import styled from "styled-components";
import SizedBox from "../Common/SizedBox";

const NoSearchResult = () => {
  return (
    <Wrapper>
      <NoResultIco />
      <SizedBox height={4}/>
      <typo.body.Body02>검색 결과가 없어요</typo.body.Body02>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default NoSearchResult;
