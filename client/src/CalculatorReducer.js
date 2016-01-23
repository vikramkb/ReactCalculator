/*eslint new-cap:0 */
"use strict";
import { CLEAR_KEY, ADD_KEY, RESULT } from "./KeyActions.js";
import math from "mathjs";

export function result(currState = { "equation": "", "result": "" }, action = {}) {
    let newState = {};
    switch(action.type) {
    case ADD_KEY:
        newState.equation = currState.equation + action.keyName;
        newState.result = currState.result;
        return newState;

    case CLEAR_KEY:
        return { "equation": "", "result": "" };

    case RESULT:
        newState.equation = currState.equation;
        newState.result = math.eval(currState.equation);
        return newState;

    default :
        return currState;
    }
}
