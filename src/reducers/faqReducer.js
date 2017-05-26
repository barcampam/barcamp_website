import {FAQ_FORM} from "../actions/faqFormAction"



export default function (state = {}, action) {
    switch (action.type) {
        case FAQ_FORM:
            if(action.payload.status === 200){
                return "Thank's for your message"
            }
            return "Something was wrong"
        default:
            return state
    }
}




