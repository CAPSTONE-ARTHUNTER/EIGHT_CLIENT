const { detectionAxios } = require(".");

export const detect = async (image, config) => {
  try {
    const response = await detectionAxios.post("", image, config);
    return response;
  } catch (err) {
    console.log(err);
  }
};
