import  axios from "axios"

const API_SPEAKER_ALL_URL = "http://api.barcamp.am/speakers"
export const SPEAKER_ALL_TYPE = "SPEAKER_ALL_TYPE"


export function fetchSpeakerAll() {

    const request = axios.get(API_SPEAKER_ALL_URL)

    return {
        type: SPEAKER_ALL_TYPE,
        payload: request
    }

}