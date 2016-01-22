/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
"use strict";
import KeyComponent from "../src/KeyComponent.jsx";
import { assert } from "chai";
import TestUtils from "react-addons-test-utils";
import React from "react";
import ReactDOM from "react-dom";
import KeyActions from "../src/KeyActions.js";
import sinon from "sinon";

describe.only("KeyComponent", () => {
    let props = null, keyComponent = null;
    before("KeyComponent", () => {
        props = {
            "key": "1"
        };
        keyComponent = TestUtils.renderIntoDocument(
            <KeyComponent keyChar={props.key} dispatch={()=>{}}/>
        );
    });

    it("Should disply the key 1", () => {
        let keyHtmlComponent = keyComponent.refs.key1;
        assert.isDefined(keyHtmlComponent);
    });

    it("Should display the content of span element as 1", () => {
        let keyDom = ReactDOM.findDOMNode(keyComponent.refs.key1);
        assert.strictEqual("1", keyDom.innerHTML);
    });

    it("Key should be the type of button", () => {
        let keyDom = ReactDOM.findDOMNode(keyComponent.refs.key1);
        assert.strictEqual("BUTTON", keyDom.tagName);
    });

    it("button click should dispatch key pressed action", (done) => {
        let keyActionsClickMock = sinon.mock(KeyActions).expects("click");
        keyActionsClickMock.withArgs("1");

        props = {
            "key": "1",
            "dispatch": (callback) => {
                callback;
                keyActionsClickMock.verify();
                KeyActions.click.restore();
                done();
            }
        };
        let keyComponent1 = TestUtils.renderIntoDocument(
            <KeyComponent keyChar={props.key} dispatch={props.dispatch} />
        );

        TestUtils.Simulate.click(keyComponent1.refs.key1);
    });

});
