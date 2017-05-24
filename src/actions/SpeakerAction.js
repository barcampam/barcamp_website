import  axios from "axios"
import {LEN} from "./Constant"

const API_SPEAKER_URL = "http://api.barcamp.am/" + LEN + "/speakers"
export const SPEAKER_TYPE = "SPEAKER_TYPE"


export function fetchSpeaker() {

    const request = axios.get(API_SPEAKER_URL)

    return {
        type: SPEAKER_TYPE,
        payload: request
    }

}
