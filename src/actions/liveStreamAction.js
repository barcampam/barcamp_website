export const LIVE_STREAM = "LIVE_STREAM"

const LiveStream = [
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTRvWRxcXvRs1PjbMEI3LTPa",
        room: "Big Hall"
    },
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTQ_urHPTBmKIh1cc-9XkRUK",
        room: "208E room"
    },
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTShNHmw0O-dDeOaH7iq9voj",
        room: "213W room"
    },
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTRKDqiHlpWqW1D_bG1_IqEV",
        room: "214W room"
    },
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTSqizWXmTzk-bxmIbnhX1Dg",
        room: "113W room"
    },
    {
        url: "https://www.youtube.com/playlist?list=PLkaN8-chLmTQKOIF3YZMY6rMzjMXroZ96",
        room: "114W room"
    }
]

export function returnLiveStream() {


    return {
        type: LIVE_STREAM,
        payload: LiveStream
    }

}