const { detectionAxios } = require(".");

export const detect = async (image, config) => {
  try {
    if (config) {
      const response = await detectionAxios.post("", image, config);
      return response;
    } else {
      const response = await detectionAxios.post("", image);
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
