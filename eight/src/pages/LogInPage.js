import React from "react";
import styled from "styled-components";
import { colors } from "../styles/color";
import typo from "../styles/typo";
import SizedBox from "../components/Common/SizedBox";
import { LockedIco, MypageIco } from "../assets/icon";
import WideBtn from "../components/Common/WideBtn";

// img
import logoImg from "../assets/logo/logo_main.png";
import bgImg from "../assets/image/loginBg.png";

const LogInPage = () => (
  <BackGround>
    <img src={bgImg} className="bgImg" alt="background" />
    {/* image & input */}
    <UpperSide>
      <SizedBox Rheight={"5rem"} />
      <img src={logoImg} className="logoImg" alt="logo" />
      <SizedBox Rheight={"5rem"} />

      {/* input */}
      <InputWrapper>
        <InputBox>
          <MypageIco fill={colors.brown} />
          <SizedBox Rwidth={"0.5rem"} />
          <Input />
        </InputBox>
        <SizedBox Rheight={"1rem"} />
        <InputBox>
          <LockedIco style={{ width: "1.5rem", height: "1.5rem" }} />
          <SizedBox Rwidth={"0.5rem"} />
          <Input />
        </InputBox>

        {/* warning */}
        <TouchArea>
          <typo.body.Body01 color={colors.red}>xsfdfs</typo.body.Body01>
        </TouchArea>
      </InputWrapper>
    </UpperSide>

    {/* buttons */}
    <BtnWrapper>
      <WideBtn text={"LOGIN"} />
      <SizedBox Rheight={"0.75rem"} />

      <WideBtn text={"SIGN UP"} bgCol={colors.copper1} />
      <SizedBox Rheight={"0.5rem"} />

      <TouchArea>
        <typo.body.Body01>Forget Password?</typo.body.Body01>
      </TouchArea>
      <SizedBox Rheight={"2.5rem"} />
    </BtnWrapper>
  </BackGround>
);

const BackGround = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  .bgImg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -3;
  }
  .logoImg {
    width: 60%;
    height: auto;
  }
`;

const InputBox = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

const Input = styled.input`
  width: 95%;
  height: 95%;
  border: none;
  background-color: #d9d9d9;
  outline: none;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UpperSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TouchArea = styled.div`
  padding: 0.5rem;
`;

export default LogInPage;
