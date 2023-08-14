import axios from "axios";

const translateAxios = axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { translateAxios };
