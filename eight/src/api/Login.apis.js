import qs from "qs";
import { serverAxios } from ".";
import { useNavigate } from "react-router-dom";

function createAuthUri() {
  const loginQueryString = qs.stringify({
    response_type: "code",
    client_id: process.env.REACT_APP_CLIENT_ID,
    // 배포시 수정
    redirect_uri: "https://capstone-eight.netlify.app/login/oauth2/code/google",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  });
  const AUTHORIZE_URI = process.env.REACT_APP_GOOGLE_AUTH;
  const OAuthRequestUri = `${AUTHORIZE_URI}?${loginQueryString}`;
  return OAuthRequestUri;
}

/**
 * get code from google oauth
 */
export function OAuthLogin() {
  const loginUrl = createAuthUri();
  window.location.href = loginUrl;
}

/**
 * send code to backend server
 */
export function OauthGetToken(code) {
  const navigation = useNavigate();
  serverAxios
    .get(`/app/login/google?code=${code}`)
    .then((res) => {
      console.log(res);
      localStorage.setItem("Token", res.data.data.accessToken);
      localStorage.setItem("RefreshToken", res.data.data.refreshToken);
      return true;
    })
    .then(() => {
      navigation("/");
    })
    .catch((err) => {
      console.log(err);
      navigation("/login");
      return false;
    });
}
export function OauthGetRefresh() {
  const navigation = useNavigate();
  serverAxios
    .post(`/app/auth/refresh`, {
      refreshToken: localStorage.getItem("RefreshToken").slice(7),
    })
    .then((res) => {
      localStorage.setItem("Token", res.data.accessToken);
      localStorage.setItem("RefreshToken", res.data.refreshToken);
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      navigation("/login");
    });
}
