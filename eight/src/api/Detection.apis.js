const { detectionAxios } = require(".");

export const detect = async (image) => {
  try {
    const response = await detectionAxios.post("", image);
    return response;
  } catch (err) {
    console.log(err);
  }
};
