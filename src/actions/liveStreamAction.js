export const LIVE_STREAM = "LIVE_STREAM"

const LiveStream = [
    {
        url: "https://www.youtube.com/embed/AZXyfu2Mjjw",
        room: "Big Hall"
    },
    {
        url: "https://www.youtube.com/embed/NfmXwqCKW-0",
        room: "308E room"
    },
    {
        url: "https://www.youtube.com/embed/WDD_J1Ec95E",
        room: "208E room"
    },
    {
        url: "https://www.youtube.com/embed/8XOzs6v5mek",
        room: "213W room"
    },
    {
        url: "https://www.youtube.com/embed/jvoJLDZbR2U",
        room: "214W room"
    },
    {
        url: "https://www.youtube.com/embed/-k9aPK5UiY8",
        room: "114W room"
    }
]

export function returnLiveStream() {


    return {
        type: LIVE_STREAM,
        payload: LiveStream
    }

}