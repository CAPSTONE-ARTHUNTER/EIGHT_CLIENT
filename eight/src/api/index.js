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

export { translateAxios, detectionAxios, ttsAxios, serverAxios };
