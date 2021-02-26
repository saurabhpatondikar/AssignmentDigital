import {combineReducers} from "redux";
import {constList} from "../Constants/constantsAct";
export function addition(state=[],action){
    switch (action.type)
    {
        case constList.ADD_DATA:
            return {
                addition:action.user
        };
        default:
            return state
    }
}
