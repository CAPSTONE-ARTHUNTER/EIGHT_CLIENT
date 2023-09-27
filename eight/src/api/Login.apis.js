import qs from "qs";
import { serverAxios } from ".";

function createAuthUri() {
  const loginQueryString = qs.stringify({
    response_type: "code",
    client_id: process.env.REACT_APP_CLIENT_ID,
    // 배포시 수정
    redirect_uri: "http://localhost:3000/getLogin",
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
  serverAxios
    .post(`/app/login/google?code=${code}`)
    .then((res) => {
      console.log(res);
      // token
      // localStorage.setItem("Token", res.example~~~);
      // navigate to '/'
      return true;
    })
    .catch((err) => {
      console.log(err);
      // navigate to '/login'
      return false;
    });
}
