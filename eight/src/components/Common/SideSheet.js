import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/color";
import typo from "../../styles/typo";
import { CloseIco, InfoIco, LangIco, SoundIco } from "../../assets/icon";
import SizedBox from "./SizedBox";
import { useNavigate } from "react-router-dom";

const SideSheet = ({sideSheetOpen, setSideSheetOpen}) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(sideSheetOpen);
  return (
    <>
      {open === true ? (
        <Background>
          <Header>
            <typo.title.Title02>Menu</typo.title.Title02>
            <IconCon
              onClick={() => {
                setOpen(false);
                setSideSheetOpen(false)
              }}
            >
              <CloseIco />
            </IconCon>
          </Header>
          <Content onClick={()=>{
            navigate("/language")
          }}>
            <LangIco />
            <SizedBox width={8} />
            <typo.body.Body02>언어 설정</typo.body.Body02>
          </Content>
          <Content>
            <SoundIco />
            <SizedBox width={8} />
            <typo.body.Body02>소리 설정</typo.body.Body02>
          </Content>
          <Content>
            <InfoIco />
            <SizedBox width={8} />
            <typo.body.Body02>앱 정보</typo.body.Body02>
          </Content>
        </Background>
      ) : null}
    </>
  );
};
const Background = styled.div`
  display: flex;
  width: 262px;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px 0px 0px 12px;
  background-color: ${colors.lightGrey};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  /* dropShadow1 */
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  padding: 24px 12px 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
`;
const IconCon = styled.div``;
const Content = styled.div`
  display: flex;
  width: 320px;
  padding: 16px 24px;
  align-items: center;
`;
export default SideSheet;
