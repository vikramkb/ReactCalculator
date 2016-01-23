/*eslint new-cap:0*/
"use strict";
import ResultComponent from "../src/ResultComponent.jsx";
import { assert } from "chai";
import TestUtils from "react-addons-test-utils";
import React from "react";
import ReactDOM from "react-dom";

describe("ResultComponent", () => {
    let props = null, keyBoardComponent = null;
    before("ResultComponent", () => {
        props = {
            "equation": "1+2",
            "result": "3"
        };
        keyBoardComponent = TestUtils.renderIntoDocument(
            <ResultComponent equation={props.equation} result={props.result}/>
        );
    });

    it("Should contain the key componet of result", () => {
        let resultDOM = ReactDOM.findDOMNode(keyBoardComponent.refs.result);
        assert.strictEqual("3", resultDOM.innerHTML);
    });

    it("Should contain the key componet of equation", () => {
        let resultDOM = ReactDOM.findDOMNode(keyBoardComponent.refs.equation);
        assert.strictEqual("1+2", resultDOM.innerHTML);
    });
});
