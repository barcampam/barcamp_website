import {DATA_TABLE_TYPE} from "../actions/DateTableAction"


export default function (state={},action) {
    switch (action){
        case DATA_TABLE_TYPE:
            console.log(action)
            return action
        default:
            return state
    }
}






