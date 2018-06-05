const speakersActons = {
    SPEAKERS_REQUEST: 'SPEAKERS_REQUEST',
    SPEAKERS_SUCCESS: 'SPEAKERS_SUCCESS',
    SPEAKERS_ERROR: 'SPEAKERS_ERROR',
    getSpeakers: () => ({
        type: speakersActons.SPEAKERS_REQUEST,
    }),
};

export default speakersActons;
