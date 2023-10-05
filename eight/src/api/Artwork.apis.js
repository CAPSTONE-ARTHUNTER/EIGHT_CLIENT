import { serverLoggedAxios } from ".";

/**
 * 작품 태그 인식
 */
export function serverTagRecognize(data) {
  return serverLoggedAxios
    .post("/app/artwork/recognize-tag", data)
    .then((res) => {
      console.log("serverTagRecognize", res.status);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
