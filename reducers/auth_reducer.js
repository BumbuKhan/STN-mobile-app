import {LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/types';

const INITIAL_STATE = {};

export default authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {token: action.payload};

        case LOGIN_FAIL:
            return {token: null};

        default:
            return state;
    }
}