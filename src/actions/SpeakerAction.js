import  axios from "axios"

const API_SPEAKER_URL = "http://api.barcamp.am/speakers"
export const SPEAKER_TYPE = "SPEAKER_TYPE"


export function fetchSpeaker() {

    const request = axios.get(API_SPEAKER_URL)

    return {
        type: SPEAKER_TYPE,
        payload: request
    }

}