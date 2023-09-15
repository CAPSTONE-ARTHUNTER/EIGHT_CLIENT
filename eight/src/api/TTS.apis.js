import { ttsAxios } from ".";

export const ttsTransform = async(data, config) => {
    try {
        const response = await ttsAxios.post('/v1/text:synthesize', data, config)
        return response
    } catch (error) {
        console.log(error)
    }
}