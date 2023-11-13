import { serverLoggedAxios } from ".";

export const logOut = async () => {
  try {
    const logOutRes = await serverLoggedAxios.post("/app/auth/logout");
    localStorage.removeItem("Token");
    localStorage.removeItem("RefreshToken");
    window.location.href = "/login";
    console.log(logOutRes);
  } catch (error) {
    console.log(error);
  }
};
