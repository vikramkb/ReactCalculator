/*eslint new-cap:0 */
"use strict";
import { List } from "immutable";

export function equation(state = List(), action = {}) {
    switch(action.type) {
    case "ADD_KEY":
        return state.push(action.key);
    default :
        return state;
    }
}