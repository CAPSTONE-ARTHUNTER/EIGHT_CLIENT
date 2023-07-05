import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { Link } from "react-router-dom";
import {
  CameraIco,
  CollectionIco,
  HomeIco,
  MypageIco,
  SearchIco,
} from "../../assets/icon";
import SizedBox from "./SizedBox";

const BottomBar = (pageType) => {
  const defaultCol = colors.copper2;
  const selectCol = colors.orange;
  return (
    <div>
      <BottomBarBack>
        <SizedBox width={4} />
        <Link to="/">
          <TouchContainer>
            {pageType === "home" ? (
              <HomeIco fill={selectCol} />
            ) : (
              <HomeIco fill={defaultCol} />
            )}
          </TouchContainer>
        </Link>
        <Link to="search">
          <TouchContainer>
            {pageType === "search" ? (
              <SearchIco fill={selectCol} />
            ) : (
              <SearchIco fill={defaultCol} />
            )}
          </TouchContainer>
        </Link>

        <Link to="/detection">
          <TouchContainer>
            {pageType === "camera" ? (
              <CameraIco fill={selectCol} />
            ) : (
              <CameraIco fill={defaultCol} />
            )}
          </TouchContainer>
        </Link>

        <Link to="/collection">
          <TouchContainer>
            {pageType === "collection" ? (
              <CollectionIco fill={selectCol} />
            ) : (
              <CollectionIco fill={defaultCol} />
            )}
          </TouchContainer>
        </Link>

        <Link to="/mypage">
          <TouchContainer>
            {pageType === "mypage" ? (
              <MypageIco fill={selectCol} />
            ) : (
              <MypageIco fill={defaultCol} />
            )}
          </TouchContainer>
        </Link>
        <SizedBox width={4} />
      </BottomBarBack>
    </div>
  );
};
const BottomBarBack = styled.div`
  background-color: ${colors.black};
  width: 100%;
  height: 56px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const TouchContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default BottomBar;
