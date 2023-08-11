import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleSignInBtn = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            // console.log(res);
            // credential로 토큰 받아와야 함
            navigate("/");
          }}
          onFailure={(err) => {
            console.log(err);
            alert("로그인 실패");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleSignInBtn;
