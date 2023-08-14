import { translateAxios } from ".";

export const translate = async (q, lng) => {
  const tData = JSON.stringify({
    q: q,
    target: lng,
  });
  try {
    const response = await translateAxios.post("", tData);
    return JSON.stringify(response.data.data.translations[0].translatedText)
      .replace(/"/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  } catch (err) {
    console.log(err);
  }
};
