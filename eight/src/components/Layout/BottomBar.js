import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import { NavLink, useLocation } from "react-router-dom";
import {
  CameraIco,
  CollectionIco,
  HomeIco,
  MypageIco,
  SearchIco,
} from "../../assets/icon";
import SizedBox from "../Common/SizedBox";

const BottomBar = () => {
  const defaultCol = colors.copper2;
  const selectCol = colors.orange;
  //현재 경로
  const location = useLocation().pathname;

  return (
    <div>
      <BottomBarBack>
        <SizedBox width={4} />

        <NavLink to="/">
          <TouchContainer>
            {location === "/" ? (
              <HomeIco fill={selectCol} />
            ) : (
              <HomeIco fill={defaultCol} />
            )}
          </TouchContainer>
        </NavLink>

        <NavLink to="/search">
          <TouchContainer>
            {location === "/search" ? (
              <SearchIco fill={selectCol} />
            ) : (
              <SearchIco fill={defaultCol} />
            )}
          </TouchContainer>
        </NavLink>

        <NavLink to="/detection">
          <TouchContainer>
            {location === "/detection" ? (
              <CameraIco fill={selectCol} />
            ) : (
              <CameraIco fill={defaultCol} />
            )}
          </TouchContainer>
        </NavLink>

        <NavLink to="/collection">
          <TouchContainer>
            {location === "/collection" ? (
              <CollectionIco fill={selectCol} />
            ) : (
              <CollectionIco fill={defaultCol} />
            )}
          </TouchContainer>
        </NavLink>

        <NavLink to="/mypage">
          <TouchContainer>
            {location === "/mypage" ? (
              <MypageIco fill={selectCol} />
            ) : (
              <MypageIco fill={defaultCol} />
            )}
          </TouchContainer>
        </NavLink>
        <SizedBox width={4} />
      </BottomBarBack>
    </div>
  );
};
const BottomBarBack = styled.div`
  background-color: ${colors.black};
  height: 56px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const TouchContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default BottomBar;
