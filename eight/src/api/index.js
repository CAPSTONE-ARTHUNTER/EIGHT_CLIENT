import axios from "axios";

const translateAxios = axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});
const ttsAxios = axios.create({
  baseURL: `https://texttospeech.googleapis.com`,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  },
});
const detectionAxios = axios.create({
  baseURL: `https://detect.roboflow.com/painting-l6exb/14`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    api_key: process.env.REACT_APP_ROBOFLOW_API, //env처리
  },
});
const serverAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const serverLoggedAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getRefreshToken = async () => {
  try {
    const res = await serverAxios.post(`/app/auth/refresh`, {
      refreshToken: localStorage.getItem("RefreshToken").slice(7),
    });
    localStorage.setItem("Token", res.data.data.accessToken);
    localStorage.setItem("RefreshToken", res.data.data.refreshToken);
  } catch (err) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};

// set token to header
serverLoggedAxios.interceptors.request.use((config) => {
  let token = localStorage.getItem("Token");
  if (token !== null && token !== undefined) {
    config.headers.Authorization = token;
  } else {
    console.log("token is null or undefined");
  }
  return config;
});

// refresh accessToken if expired & resend request
serverLoggedAxios.interceptors.response.use(
  (res) => {
    console.log(res.status, "serverLoggedAxios");
    return res;
  },
  async (err) => {
    const { config, response } = err;
    console.log(response.status);
    if (response.status !== 401 || config.sent) {
      return Promise.reject(err);
    }
    if (response.status === 401) {
      config.sent = true;
      await getRefreshToken();
      if (localStorage.getItem("Token")) {
        err.config.headers.Authorization = localStorage.getItem("Token");
        return serverLoggedAxios(err.config);
      }
    }
  }
);

export {
  translateAxios,
  detectionAxios,
  ttsAxios,
  serverAxios,
  serverLoggedAxios,
};
