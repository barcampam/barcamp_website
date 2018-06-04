const scheduleActons = {
    SCHEDULE_REQUEST: 'SCHEDULE_REQUEST',
    SCHEDULE_SUCCESS: 'SCHEDULE_SUCCESS',
    SCHEDULE_ERROR: 'SCHEDULE_ERROR',
    getSchedule: () => ({
        type: scheduleActons.SCHEDULE_REQUEST,
    }),
};

export default scheduleActons;
