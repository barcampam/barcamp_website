import {DATA_TABLE_TYPE} from "../actions/DateTableAction"
import _ from "lodash"
import moment from "moment"

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

        let a = moment(index.time_from.date).hours()
        let name  = _.findIndex(roomName, {'room': index.room});

        let room = arr.indexOf(a)
        if (name === -1) {
            roomName.push({room:index.room,cols:[index]})
        }else{
            let RoomFirst = _.findIndex(roomName, {'room': index.room});
            roomName[RoomFirst].cols.push(index)

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



