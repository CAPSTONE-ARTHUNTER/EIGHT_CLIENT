import { serverLoggedAxios } from ".";

export function getUserProfile() {
  return serverLoggedAxios
    .get("/app/users/profile")
    .then((res) => {
      console.log(res.data.message);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
