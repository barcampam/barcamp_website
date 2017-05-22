import {DATA_TABLE_TYPE} from "../actions/DateTableAction"
import _ from "lodash"


export default function (state = {}, action) {
    switch (action.type) {
        case DATA_TABLE_TYPE:
            return DataFilter(action.payload.data)
        default:
            return state
    }
}


function DataFilter(data) {
    const arr = []
    const roomName = []
    const items = []
    data.map(function (index, x) {

        let a = new Date(index.time_from.date).getHours()
        let name = roomName.indexOf(index.room)
        let room = arr.indexOf(a)

        if (name === -1) {
            roomName.push(index.room)
        }

        if (room === -1) {
            arr.push(a)
            items.push({
                name: a, item: []
            })

            let indexRoomFirst = _.findIndex(items, {'name': a});
            items[indexRoomFirst].item.push(index)

        } else {
            let indexRoom = _.findIndex(items, {'name': a});
            items[indexRoom].item.push(index)
        }

    })
    return {items: items, names: roomName}

}



