import { result } from "./CalculatorReducer.js";

export default class KeyActions {
    static click(dispatch, keyParamName) {
        let keyName = keyParamName;
        if(isNaN(keyParamName)) {
            dispatch({
                "type": "ADD_KEY",
                keyName
            });
        } else {
            keyName = parseInt(keyName);
            dispatch({
                "type": "ADD_KEY",
                keyName
            });
        }
    }
}

