export const SELECT_AREA = 'select_area';

export const selectArea = area => {    
    return {
        type: SELECT_AREA,
        payload: area
    }
}