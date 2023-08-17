import axios from "axios";

const translateAxios = axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
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

export { translateAxios, detectionAxios };
