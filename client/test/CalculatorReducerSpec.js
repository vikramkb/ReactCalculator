/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
"use strict";
import { result } from "../src/CalculatorReducer.js";
import { assert } from "chai";
import sinon from "sinon";

describe("CalculatorReducer", () => {

    before("CalculatorReducer", () => {
    });

    describe("equation", () => {
        it("Should return empty in result and equation as a initial state", () => {
            let initialState = undefined; //eslint-disable-line
            let currentState = result(initialState);
            assert.strictEqual("", currentState.equation);
            assert.strictEqual("", currentState.result);
        });

        describe("ADD_KEY action", () => {
            it("Should return the new equation as 1", () => {
                let initialState = { "equation": "", "result": "" };
                let action = { "type": "ADD_KEY", "keyName": 1 };
                let currentState = result(initialState, action);
                assert.strictEqual("1", currentState.equation);
            });

            it("Should return the new equation as 1+2 with the prev state as 1+ and add key is 2", () => {
                let prevState = { "equation": "1+", "result": 1 };
                let action = { "type": "ADD_KEY", "keyName": 2 };
                let currentState = result(prevState, action);
                assert.strictEqual("1+2", currentState.equation);
            });
        });

        describe("RESULT action", () => {
            it("Should return the new result as 3 for the the equation 1+2", () => {
                let prevState = { "equation": "1+2" };
                let action = { "type": "RESULT" };
                let currentState = result(prevState, action);
                assert.strictEqual(3, currentState.result);
            });
        });
    });

});
