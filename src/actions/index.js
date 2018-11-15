export const SELECT_AREA = 'select_area';
export const DESELECT_AREA = 'deselect_area';

export const selectArea = area => {
    let areaSelected = false;
    if( area.selected ) {
        areaSelected = DESELECT_AREA;
    } else {
        areaSelected = SELECT_AREA;
    }
    return {
        type: areaSelected,
        payload: area
    }
}