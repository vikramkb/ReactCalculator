/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
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

        describe("ADD_KEY action", () => {
            it("Should return the list with key 1", () => {
                let initialState = List();
                let action = { "type": "ADD_KEY", "key": 1 };
                let currentState = equation(initialState, action);
                assert.strictEqual(1, currentState.size);
                assert.strictEqual(1, currentState.get(0));
            });

            it("Should return the list with key 1+2 with the previous state is 1+ and added key is 2", () => {
                let prevState = List([1, "+"]);
                let action = { "type": "ADD_KEY", "key": 2 };
                let currentState = equation(prevState, action);
                assert.notDeepEqual(prevState.toArray(), currentState.toArray());
                assert.strictEqual(3, currentState.size);
                assert.deepEqual([1, "+", 2], currentState.toArray());
            });
        });

        describe("DELETE_KEY action", () => {
            it("Should return the empty list incase previous state is empty", () => {
                let initialState = List();
                let action = { "type": "DELETE_KEY" };
                let currentState = equation(initialState, action);
                assert.strictEqual(0, currentState.size);
            });

            it("Should return the 1+ if the previous state is 1+2", () => {
                let prevState = List([1, "+", 2]);
                let action = { "type": "DELETE_KEY" };
                let currentState = equation(prevState, action);
                assert.notDeepEqual(prevState.toArray(), currentState.toArray());
                assert.deepEqual([1, "+"], currentState.toArray());
            });
        });
    });

});
