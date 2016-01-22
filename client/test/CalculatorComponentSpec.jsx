"use strict";
import { CalculatorComponent } from "../src/CalculatorComponent.jsx";
import { assert } from "chai";
import TestUtils from "react-addons-test-utils";
import React from "react";
import { List } from "immutable";


describe("CalculatorComponent", () => {
    let calculatorComponent = null;
    before("CalculatorComponent", () => {
        let props = {
            "result": {
                "equation": List(),
                "result": "0"
            }
        }
        calculatorComponent = TestUtils.renderIntoDocument(
            <CalculatorComponent result={props.result} dispatch={()=>{""}}/>
        );
    });

    it("Should contain the key component of keyboard", () => {
        assert.isDefined(calculatorComponent.refs.keyboard);
    });

    it("Should contain the key component of result", () => {
        assert.isDefined(calculatorComponent.refs.result);
    });

});
