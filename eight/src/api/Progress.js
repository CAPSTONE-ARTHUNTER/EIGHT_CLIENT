import { serverLoggedAxios } from ".";

export const getProgress = async () => {
  try {
    const progressRes = await serverLoggedAxios.get(
      "/app/collection/challenge"
    );
    return progressRes.data;
  } catch (error) {
    console.log(error);
  }
};
