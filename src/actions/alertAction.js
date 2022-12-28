import { HIDDEN_ALERT, SHOW_ALERT } from '../types';

export function showAlerAction(alert){
    return (dispatch) => {
        dispatch(showAlert(alert));
    }
}

const showAlert = (alert) => ({
    type: SHOW_ALERT,
    payload: alert,
});


export function hiddenAlerAction(alert){
    return (dispatch) => {
        dispatch(hiddenAlert());
    }
}

const hiddenAlert = () => ({
    type: HIDDEN_ALERT,
});