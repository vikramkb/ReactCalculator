/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
"use strict";
import KeyActions, { ADD_KEY, RESULT, CLEAR_KEY } from "../src/KeyActions.js";
import { assert } from "chai";
import sinon from "sinon";

describe("KeyActions", () => {

    before("KeyActions", () => {
    });

    describe("click", () => {
        it("should dispatch ADD_KEY action when the key clicked is 1", (done) => {
            let dispatch = (action) => {
                if(action.type === ADD_KEY) {
                    assert.deepEqual({ "type": ADD_KEY, "keyName": "1" }, action);
                } else {
                    assert.deepEqual({ "type": RESULT }, action);
                    done();
                }
            };

            KeyActions.click(dispatch, "1");
        });

        it("should dispatch CLEAR_KEY action when the key clicked is C", (done) => {
            let dispatch = (action) => {
                assert.deepEqual({ "type": CLEAR_KEY }, action);
                done();
            };

            KeyActions.click(dispatch, "C");
        });
    });
});

