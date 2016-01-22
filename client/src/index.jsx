"use strict";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import "babel/polyfill";
import CalculatorComponent from "./CalculatorComponent.jsx";
import { result } from "./CalculatorReducer.js";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const calculatorApp = combineReducers({
    result
});


let store = createStoreWithMiddleware(calculatorApp);

ReactDOM.render(
    <Provider store={store}>
        <CalculatorComponent />
    </Provider>,
    document.getElementById("main")
);
