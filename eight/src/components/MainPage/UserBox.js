import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import profileImage from "../../assets/image/userProfile.png";
import typo from "../../styles/typo";
import SizedBox from "../Common/SizedBox";
import { MoreIco } from "../../assets/icon";
import { useLocation } from "react-router-dom";
import { serverLoggedAxios } from "../../api";

const UserBox = ({ t }) => {
  // ref로 레벨바 width 구하기
  const [lvBarWidth, setLvBarWidth] = useState(0);
  const levelBarRef = useRef(null);

  // userInfo에서 받아서 표시
  const [userData, setUserData] = useState({
    userImage: profileImage,
    userExp: 0,
    solvedRelicNum: 0,
    badgeList: [],
  });
  // const badge

  useEffect(() => {
    serverLoggedAxios
      .get("/app/collection/overview")
      .then((res) => {
        console.log("userDataOverview", res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setLvBarWidth(levelBarRef.current.clientWidth);
  }, [levelBarRef]);

  const location = useLocation().pathname;
  return (
    <BackGround>
      <ColWrapper>
        <RowWrapper>
          <ProfileImage img={userData.userImage} refer />
          <ColWrapper>
            <TextRowWrapper>
              <SizedBox width={4} />
              <ColWrapper>
                <typo.body.Body01>{t("profile.alias")}</typo.body.Body01>

                {/* 소수점 처리 필요 */}
                <typo.body.Body02>Lv.{userData.userExp}</typo.body.Body02>
              </ColWrapper>
              <PartitionLine />
              <ColWrapper>
                <typo.body.Body01>{t("profile.pieceFound")}</typo.body.Body01>
                <typo.body.Body02>{userData.solvedRelicNum}</typo.body.Body02>
              </ColWrapper>
              <SizedBox width={4} />
            </TextRowWrapper>

            <SizedBox height={8} />
            {/* 레벨바 */}
            <LevelbarWrapper ref={levelBarRef}>
              <LevelBarRail />
              <LevelBar width={`${userData.userExp * (lvBarWidth / 100)}px`} />
            </LevelbarWrapper>
          </ColWrapper>
        </RowWrapper>

        <SizedBox height={12} />
        {/* 경로 mypage인 경우에만 표시 */}
        {location === "/" || userData.badgeList.length > 0 ? (
          <BadgeRail>
            {userData.badgeList.map((badge) => {
              return (
                <Badge
                  key={"userBadge" + badge.relicId}
                  img={badge.badgeImage}
                />
              );
            })}

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
  background-image: url(${(props) => props.img});
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
  justify-content: flex-start;
  align-items: center;
`;
const Badge = styled.div`
  height: 3.125rem;
  width: 2.7rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default UserBox;
