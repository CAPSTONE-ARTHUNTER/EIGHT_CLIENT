import React from "react";
import styled from "styled-components";
import SizedBox from "../components/Common/SizedBox";
import logoImg from "../assets/logo/logo_main.png";
import bgImg from "../assets/image/loginBg.png";
import GoogleSignInBtn from "../components/Common/GoogleSignInBtn";
// import { useState } from "react";

const LogInPage = () => {
  // const [userInfo, setUserInfo] = useState();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BackGround>
      <img src={bgImg} className="bgImg" alt="background" />
      {/* image & input */}
      <UpperSide>
        <SizedBox Rheight={"5rem"} />
        <img src={logoImg} className="logoImg" alt="logo" />
        <SizedBox Rheight={"5rem"} />
      </UpperSide>
      <div>
        <GoogleSignInBtn />
        <SizedBox Rheight={"6rem"} />
      </div>
    </BackGround>
  );
};

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

const UpperSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LogInPage;
