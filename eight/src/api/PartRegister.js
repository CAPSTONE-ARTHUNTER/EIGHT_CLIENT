import { serverLoggedAxios } from ".";

export const partRegister = (partTitle) => {
  serverLoggedAxios
    .post("/app/artwork/detection", {
      name: partTitle,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
