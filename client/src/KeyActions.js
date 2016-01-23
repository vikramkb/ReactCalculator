import { result } from "./CalculatorReducer.js";
export const CLEAR_KEY = "CLEAR_KEY";
export const ADD_KEY = "ADD_KEY";
export const RESULT = "RESULT";


export default class KeyActions {
    static click(dispatch, keyName) {
        if(keyName === "C") {
            dispatch({
                "type": CLEAR_KEY
            });
        } else {
            dispatch({ "type": ADD_KEY, keyName });
            dispatch({ "type": RESULT });
        }
    }
}

