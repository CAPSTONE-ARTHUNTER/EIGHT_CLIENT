import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import {
  BackIco,
  HamburgerIco,
  MypageIco,
  TypeLogo,
  XIco,
} from "../../assets/icon";
import SizedBox from "./SizedBox";
import typo from "../../styles/typo";
import SideSheet from "./SideSheet";

const TopBar = ({ type, text }) => {
  const [sideSheetOpen, setSideSheetOpen] = useState(false);

  let IconComponent = null;
  let LeftIconComponent = BackIco;
  let RightIconComponent = HamburgerIco;

  if (type === "logo") {
    LeftIconComponent = MypageIco;
    IconComponent = TypeLogo;
  } else if (type === "close") {
    IconComponent = () => <typo.body.Body02>{text}</typo.body.Body02>;
    RightIconComponent = XIco;
  } else {
    IconComponent = () => <typo.body.Body02>{text}</typo.body.Body02>;
  }

  const openSideSheet = () => {
    if (type !== "close") {
      setSideSheetOpen(true)
    }
  };

  return (
    <Background>
      <SizedBox width={16} />
      <BarCon>
        <TouchCon>
          <LeftIconComponent fill={colors.brown} />
        </TouchCon>
        <IconComponent />
        <TouchCon
          onClick={() => {
            if (type !== "close") {
              openSideSheet()
            }
          }}
        >
          <RightIconComponent />
        </TouchCon>
      </BarCon>
      <SizedBox width={16} />

      {/* sidesheet */}
      {sideSheetOpen && <SideSheet sideSheetOpen={sideSheetOpen} setSideSheetOpen={setSideSheetOpen}/>}
    </Background>
  );
};
const Background = styled.div`
  width: 100%;
  height: 52px;
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  background-color: ${colors.beige};
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
