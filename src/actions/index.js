import { COUNTER_CLICK, INCREASE_TIMER } from './types';

export const counterClick =  () => {

    console.log('counterClick action fired...');

    return (dispatch) => {
        dispatch({
            type: COUNTER_CLICK
        })
    }

};

export const increaseTimer = () => ({
    type: INCREASE_TIMER
});