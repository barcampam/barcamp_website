import  axios from "axios"

const API_FAQ_FORM_URL = "http://api.barcamp.am/feedback"
export const FAQ_FORM = "FAQ_FORM"


export function fetchFormPost(email, text) {

    const config = {headers: {'Content-Type': 'multipart/form-data'}};
    let fd = new FormData();
    fd.append('email', email);
    fd.append('body', text);
    const request =  axios.post(API_FAQ_FORM_URL, fd, config)

    return {
        type: FAQ_FORM,
        payload:request
    }
}
