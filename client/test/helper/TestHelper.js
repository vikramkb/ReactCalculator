"use strict";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { expect } from "chai";
import jsdom from "jsdom";

const middlewares = [thunk];

export default function mockStore(getState, expectedActions, done) {
    if (!Array.isArray(expectedActions)) {
        throw new Error("expectedActions should be an array of expected actions.");
    }
    if (typeof done !== "undefined" && typeof done !== "function") {
        throw new Error("done should either be undefined or function.");
    }

    function mockStoreWithoutMiddleware() {
        return {
            getState() {
                return typeof getState === "function" ? getState() : getState;
            },

            dispatch(action) {
                const expectedAction = expectedActions.shift();
                try {
                    expect(action).to.deep.equal(expectedAction);
                    if (done && !expectedActions.length) {
                        done();
                    }
                    return action;
                } catch (error) {
                    done(error);
                }
            }
        };
    }

    const mockStoreWithMiddleware = applyMiddleware(
        ...middlewares
    )(mockStoreWithoutMiddleware);

    return mockStoreWithMiddleware();
}

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
