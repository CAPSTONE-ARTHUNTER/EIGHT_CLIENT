import React from "react";
import { OauthGetToken } from "../api/Login.apis";

var qs = require("qs");

const GetLogin = () => {
  /** get code from URI */
  const parsed = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  return <div>{OauthGetToken(parsed.code)}</div>;
};

export default GetLogin;
