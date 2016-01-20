/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0 */
"use strict";
import { equation } from "../src/CalculatorReducer.js";
import { List } from "immutable";
import { assert } from "chai";

describe("CalculatorReducer", () => {

    before("CalculatorReducer", () => {
    });

    describe("equation", () => {
        it("Should return the empty list as initial state", () => {
            let initialState = undefined; //eslint-disable-line
            let currentState = equation(initialState);
            assert.strictEqual(0, currentState.size);
        });

        it("Should return the list with key 1", () => {
            let initialState = List();
            let action = { "type": "ADD_KEY", "key": 1 }
            let currentState = equation(initialState, action);
            assert.strictEqual(1, currentState.size);
            assert.strictEqual(1, currentState.get(0));
        });
    });
});
