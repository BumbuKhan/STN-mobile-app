import {combineReducers} from 'redux';

import auth from './auth_reducer';

// here is the structure of all our app
/*

{
    auth: {
        token: 'alpha-numeric string - WJT (JSON Web Token)'
    }
}

*/

export default combineReducers({
    auth,
});