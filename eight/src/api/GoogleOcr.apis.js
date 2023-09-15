import axios from "axios";

export const PostOcrImg = async (data, config) => {
  try {
    const response = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
