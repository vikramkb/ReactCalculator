import { result } from "./CalculatorReducer.js";
export const CLEAR_KEY = "CLEAR_KEY";
export const ADD_KEY = "ADD_KEY";


export default class KeyActions {
    static click(dispatch, keyParamName) {
        if(keyParamName === "C") {
            dispatch({
                "type": CLEAR_KEY
            });
        } else {
            let keyName = isNaN(keyParamName) ? keyParamName : parseInt(keyParamName);
            dispatch({
                "type": ADD_KEY,
                keyName
            });
        }
    }
}

