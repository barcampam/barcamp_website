import  axios from "axios"

const API_FAQ_FORM_URL = "http://api.barcamp.am/feedback"
export const DATA_TABLE_TYPE = "API_FAQ_FORM_URL"


export function fetchFormPost(email, text) {

    const config = {headers: {'Content-Type': 'multipart/form-data'}};
    let fd = new FormData();
    fd.append('email', email);
    fd.append('body', text);
    axios.post(API_FAQ_FORM_URL, fd, config)
        .then(response => console.log(response))
        .catch(errors => console.log(errors))
    return {
        type: DATA_TABLE_TYPE,
    }
}
