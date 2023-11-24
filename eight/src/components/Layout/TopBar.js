import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import {
  BackIco,
  HamburgerIco,
  MypageIco,
  TypeLogo,
  XIco,
} from "../../assets/icon";
import SizedBox from "../Common/SizedBox";
import typo from "../../styles/typo";
import SideSheet from "../Common/SideSheet";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ text }) => {
  const [sideSheetOpen, setSideSheetOpen] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  let IconComponent = null;
  let LeftIconComponent = BackIco;
  let RightIconComponent = HamburgerIco;

  if (location === "/") {
    LeftIconComponent = MypageIco;
    IconComponent = TypeLogo;
  } else if (location === "/detection") {
    // 이후에 경로 수정하기

    IconComponent = () => <typo.body.Body02>{text}</typo.body.Body02>;
    RightIconComponent = XIco;
  } else {
    IconComponent = () => <typo.body.Body02>{text}</typo.body.Body02>;
  }

  const openSideSheet = () => {
    if (sideSheetOpen === false) {
      setSideSheetOpen(true);
    }
  };

  return (
    <Background>
      <SizedBox width={16} />
      <BarCon>
        <TouchCon>
          <LeftIconComponent
            fill={colors.brown}
            onClick={() => {
              if (LeftIconComponent === BackIco) {
                navigate(-1);
              }
            }}
          />
        </TouchCon>
        <IconComponent />
        <TouchCon
          onClick={() => {
            if (RightIconComponent === HamburgerIco) openSideSheet();
          }}
        >
          <RightIconComponent />
        </TouchCon>
      </BarCon>
      <SizedBox width={16} />

      {/* sidesheet */}
      {sideSheetOpen && (
        <SideSheet
          sideSheetOpen={sideSheetOpen}
          setSideSheetOpen={setSideSheetOpen}
        />
      )}
    </Background>
  );
};
const Background = styled.div`
  width: 100%;
  max-width: 425px;
  height: 52px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  z-index: 5;
  background-color: ${colors.beige};
  margin: auto;
`;
const BarCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TouchCon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
export default TopBar;
