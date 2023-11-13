import { serverLoggedAxios } from ".";

export const getGptComment = async (part) => {
  try {
    const gptCommentRes = await serverLoggedAxios.post(
      "/app/gpt/elementsinfo",
      {
        // name: part,
        name: 'cheongja_cloud',
      }
    );
    return gptCommentRes.data;
  } catch (error) {
    console.log(error);
  }
};
