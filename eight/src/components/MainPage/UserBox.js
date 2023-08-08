import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import profileImage from "../../assets/image/userProfile.png";
import typo from "../../styles/typo";
import { badge_chip } from "../../assets/image/badge";
import SizedBox from "../Common/SizedBox";
import { MoreIco } from "../../assets/icon";
import { useLocation } from "react-router-dom";

const UserBox = ({ userInfo, t }) => {
  // ref로 레벨바 width 구하기
  const [lvBarWidth, setLvBarWidth] = useState(0);
  const levelBarRef = useRef(null);

  useEffect(() => {
    setLvBarWidth(levelBarRef.current.clientWidth);
  }, [levelBarRef]);

  // userInfo에서 받아서 표시
  const userLevel = 0;
  const countFound = 0;
  const levelPercent = 50;
  // const badge

  const location = useLocation().pathname;
  return (
    <BackGround>
      <ColWrapper>
        <RowWrapper>
          <ProfileImage />
          <ColWrapper>
            <TextRowWrapper>
              <SizedBox width={4} />
              <ColWrapper>
                <typo.body.Body01>{t("profile.alias")}</typo.body.Body01>
                <typo.body.Body02>Lv.{userLevel}</typo.body.Body02>
              </ColWrapper>
              <PartitionLine />
              <ColWrapper>
                <typo.body.Body01>{t("profile.pieceFound")}</typo.body.Body01>
                <typo.body.Body02>{countFound}</typo.body.Body02>
              </ColWrapper>
              <SizedBox width={4} />
            </TextRowWrapper>

            <SizedBox height={8} />
            {/* 레벨바 */}
            <LevelbarWrapper ref={levelBarRef}>
              <LevelBarRail />
              <LevelBar width={`${levelPercent * (lvBarWidth / 100)}px`} />
            </LevelbarWrapper>
          </ColWrapper>
        </RowWrapper>

        <SizedBox height={12} />
        {/* 경로 mypage인 경우에만 표시 */}
        {location === "/" ? (
          <BadgeRail>
            {/* 이후 수정 */}
            <img className="badge" src={badge_chip} />
            <img className="badge" src={badge_chip} />
            <img className="badge" src={badge_chip} />
            <img className="badge" src={badge_chip} />
            <img className="badge" src={badge_chip} />
            <SizedBox width={4} />
            <MoreIco />
          </BadgeRail>
        ) : null}
        {/* 뱃지 */}
      </ColWrapper>
    </BackGround>
  );
};

const BackGround = styled.div`
  border-radius: 1.5rem;
  background: rgba(207, 200, 188, 0.4);
  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
  /* layout */
  display: flex;
  width: 100%;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  background-image: url(${profileImage});
  background-size: contain;
  width: 3.4rem;
  height: 3.4rem;
  background-repeat: no-repeat;
`;

const RowWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const TextRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ColWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartitionLine = styled.div`
  height: 1rem;
  width: 1px;
  background-color: ${colors.brown};
  color: ${colors.brown};
`;

const LevelbarWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const LevelBarRail = styled.div`
  width: 100%;
  height: 0.4rem;
  border-radius: 6px;
  background-color: ${colors.brown};
`;
const LevelBar = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 0.4rem;
  border-radius: 6px;
  background-color: ${colors.orange};
  position: absolute;
  top: 0;
`;
const BadgeRail = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .badge {
    height: 3rem;
  }
`;
export default UserBox;
