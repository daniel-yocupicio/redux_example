import { HIDDEN_ALERT, SHOW_ALERT } from '../types';

const initilState = {
    alert: null,
};

export default function AlertReducer(state = initilState, action) {
    switch (action.type) {  
        case SHOW_ALERT:
            return {...state, alert: action.payload};

        case HIDDEN_ALERT:
            return {...state, alert: null};

        default:
            return state;
    }
}