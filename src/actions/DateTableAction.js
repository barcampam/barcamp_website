import  axios from "axios"

const API_DATA_TABLE_URL = "http://api.barcamp.am/schedule"
export const DATA_TABLE_TYPE = "DATA_TABLE_TYPE"

export function fetchDateTable() {
    const request = axios.get(API_DATA_TABLE_URL).then(function (data) {
        console.log(data)
    })

    return {
        type:DATA_TABLE_TYPE,
        payload:request
    }

}