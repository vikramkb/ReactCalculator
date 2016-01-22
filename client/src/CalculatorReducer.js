/*eslint new-cap:0 */
"use strict";
import { List } from "immutable";
import Equation from "./Equation.js";

export function result(prevState = {"equation":List(), "result":""}, action = {}) {
    let newState={};
    switch(action.type) {
    case "ADD_KEY":
        newState.equation = prevState.equation.push(action.keyName);
        if(!isNaN(action.keyName)) {
            newState.result = new Equation(newState.equation.toArray()).result();
        }else{
            newState.result = prevState.result;
        }
        return newState;
    default :
        return prevState;
    }
}
