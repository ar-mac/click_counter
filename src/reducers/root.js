import { COUNTER_CLICK, INCREASE_TIMER } from '../actions/types';

const initialState = {
    counter: 0,
    timer: 0
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case COUNTER_CLICK:
            return Object.assign({}, {
                ...state,
                counter: state.counter + 1
            });
        case INCREASE_TIMER:
            return Object.assign({}, {
                ...state,
                timer: state.timer + 1
            });
        default:
            return state;
    }
};

export default rootReducer;