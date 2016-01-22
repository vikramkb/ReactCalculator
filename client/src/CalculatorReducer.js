/*eslint new-cap:0 */
"use strict";
import { List } from "immutable";
import Equation from "./Equation.js";
import { CLEAR_KEY, ADD_KEY } from "./KeyActions.js";

export function result(prevState = { "equation": List(), "result": "0" }, action = {}) {
    let newState = {};
    switch(action.type) {
    case ADD_KEY:
        newState.equation = prevState.equation.push(action.keyName);
        if(isNaN(action.keyName)) {
            newState.result = prevState.result;
        } else {
            newState.result = new Equation(newState.equation.toArray()).result();
        }
        return newState;
    case CLEAR_KEY:
        return { "equation": List(), "result": "0" };
    default :
        return prevState;
    }
}
