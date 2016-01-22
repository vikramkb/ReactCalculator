/* eslint no-unused-expressions:0, max-nested-callbacks: [2, 5], new-cap:0, no-magic-numbers:0 */
"use strict";
import KeyBoardComponent from "../src/KeyBoardComponent.jsx";
import KeyComponent from "../src/KeyComponent.jsx";
import { assert } from "chai";
import TestUtils from "react-addons-test-utils";
import React from "react";
import ReactDOM from "react-dom";

describe("KebBoardComponent", () => {
    let props = null, keyBoardComponent = null;
    before("KeyBoardComponent", () => {
        props = {
            "key": "1"
        };
        keyBoardComponent = TestUtils.renderIntoDocument(
            <KeyBoardComponent keyChar={props.key} dispatch={()=> {""}}/>
        );
    });

    it("Should contain the key componet of 1", () => {
        let keyComponent = keyBoardComponent.refs.key1;
        assert.isDefined(keyComponent);
        assert.strictEqual("1", keyComponent.props.keyChar);
    });

    it("Should contain the key componets of 1 to 5", () => {
        let digitKeysDom = ReactDOM.findDOMNode(keyBoardComponent.refs.keysFirstRow);
        assert.strictEqual(5, digitKeysDom.childNodes.length);
    });

    it("Should contain the key componet of 6", () => {
        let keyComponent = keyBoardComponent.refs.key6;
        assert.isDefined(keyComponent);
        assert.strictEqual("6", keyComponent.props.keyChar);
    });

    it("Should contain the key componets of 6, 7, 8, 9, 0", () => {
        let digitKeysDom = ReactDOM.findDOMNode(keyBoardComponent.refs.keysSecondRow);
        assert.strictEqual(5, digitKeysDom.childNodes.length);
    });

    it("Should contain the key componet of +", () => {
        let keyComponent = keyBoardComponent.refs.keyplus;
        assert.isDefined(keyComponent);
        assert.strictEqual("+", keyComponent.props.keyChar);
    });

    it("Should contain the key componets of +, -, *, /, =", () => {
        let digitKeysDom = ReactDOM.findDOMNode(keyBoardComponent.refs.keysThirdRow);
        assert.strictEqual(5, digitKeysDom.childNodes.length);
    });

});
