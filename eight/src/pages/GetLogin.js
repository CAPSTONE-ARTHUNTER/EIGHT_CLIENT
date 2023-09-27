import React from "react";
import { OauthGetToken } from "../api/Login.apis";

var qs = require("qs");

const GetLogin = () => {
  /** get code from URI */
  const parsed = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  // code 확인
  console.log(parsed.code);

  // OauthGetToken(parsed.code);

  return <div>GetLogin</div>;
};

export default GetLogin;
