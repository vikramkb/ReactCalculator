/*eslint new-cap:0 */
"use strict";
import Equation from "./Equation.js";
import { CLEAR_KEY, ADD_KEY, RESULT } from "./KeyActions.js";

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
        let equationArray = getArray(currState.equation);
        if(equationArray.length > 0 && !isNaN(equationArray[equationArray.length - 1])) {
            newState.result = Equation.instance(equationArray).result();
        } else {
            newState.result = currState.result;
        }
        return newState;

    default :
        return currState;
    }
}


function getArray(equationStr) {
    return equationStr.match(/(\d+|\+|-|\/|\*)/g).map((element) => {
        return isNaN(element) ? element : parseInt(element);
    });
}