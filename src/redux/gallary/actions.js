const gallaryActons = {
    GALLARY_REQUEST: 'GALLARY_REQUEST',
    GALLARY_SUCCESS: 'GALLARY_SUCCESS',
    GALLARY_ERROR: 'GALLARY_ERROR',
    getGallary: () => ({
        type: gallaryActons.GALLARY_REQUEST,
    }),
};

export default gallaryActons;
