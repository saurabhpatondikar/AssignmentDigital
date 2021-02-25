import {constList} from '../Constants/constantsAct'
export function storeAction(name){
    return dispatch => {
        dispatch(success(name));

    };
    function success(user) { return { type: constantsA.ADD_DATA, user } }
}
