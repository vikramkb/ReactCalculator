/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
"use strict";
import { result } from "../src/CalculatorReducer.js";
import { List } from "immutable";
import { assert } from "chai";

describe("CalculatorReducer", () => {

    before("CalculatorReducer", () => {
    });

    describe("equation", () => {
        it("Should return the empty list as initial state and result as 0", () => {
            let initialState = undefined; //eslint-disable-line
            let currentState = result(initialState);
            assert.strictEqual(0, currentState.equation.size);
            assert.strictEqual("0", currentState.result);
        });

        describe("ADD_KEY action", () => {
            it("Should return the list with key 1", () => {
                let initialState = { "equation": List(), "result": 0 };
                let action = { "type": "ADD_KEY", "keyName": 1 };
                let currentState = result(initialState, action);
                assert.strictEqual(1, currentState.equation.size);
                assert.strictEqual(1, currentState.equation.get(0));
                assert.strictEqual(1, currentState.result);
            });

            it("Should return the list with key 1+2 with the previous state is 1+ and added key is 2", () => {
                let prevState = { "equation": List([1, "+"]), "result": 1};
                let action = { "type": "ADD_KEY", "keyName": 2 };
                let currentState = result(prevState, action);
                assert.notDeepEqual(prevState.equation.toArray(), currentState.equation.toArray());
                assert.strictEqual(3, currentState.equation.size);
                assert.deepEqual([1, "+", 2], currentState.equation.toArray());
                assert.strictEqual(3, currentState.result);
            });
        });
    });

});
