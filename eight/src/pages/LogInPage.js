import React from "react";
import styled from "styled-components";
import SizedBox from "../components/Common/SizedBox";
import logoImg from "../assets/logo/logo_main.png";
import bgImg from "../assets/image/loginBg.png";
import { OAuthLogin } from "../api/Login.apis";
import loginBtn from "../assets/image/btn_google_signin_light_normal_web@2x.png";

const LogInPage = () => {
  return (
    <BackGround>
      <img src={bgImg} className="bgImg" alt="background" />
      <UpperSide>
        <SizedBox Rheight={"5rem"} />
        <img src={logoImg} className="logoImg" alt="logo" />
        <SizedBox Rheight={"5rem"} />
      </UpperSide>
      <div>
        <img
          src={loginBtn}
          alt="login button"
          onClick={OAuthLogin}
          style={{ width: "60%" }}
        />
        <SizedBox Rheight={"6rem"} />
      </div>
    </BackGround>
  );
};

const BackGround = styled.div`
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
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
