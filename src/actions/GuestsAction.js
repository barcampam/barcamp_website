import  axios from "axios"
import {LEN} from "./Constant"

const API_SPEAKER_URL = "http://api.barcamp.am/" + LEN + "/speakers/special"
export const SPEAKER_SPECIAL_TYPE = "SPEAKER_SPECIAL_TYPE"


export function fetchGuests() {

    const request = axios.get(API_SPEAKER_URL)

    return {
        type: SPEAKER_SPECIAL_TYPE,
        payload: request
    }

}
