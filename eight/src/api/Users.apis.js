import { serverLoggedAxios } from ".";

export function getUserProfile() {
  return serverLoggedAxios
    .get("/app/users/profile")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("getUserProfile", err);
      return false;
    });
}
