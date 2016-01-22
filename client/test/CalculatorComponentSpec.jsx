"use strict";
import { CalculatorComponent } from "../src/CalculatorComponent.jsx";
import { assert } from "chai";
import TestUtils from "react-addons-test-utils";
import React from "react";

describe("CalculatorComponent", () => {
    let calculatorComponent = null;
    before("CalculatorComponent", () => {
        calculatorComponent = TestUtils.renderIntoDocument(
            <CalculatorComponent dispatch={()=>{""}}/>
        );
    });

    it("Should contain the key component of keyboard", () => {
        assert.isDefined(calculatorComponent.refs.keyboard);
    });

    it("Should contain the key component of result", () => {
        assert.isDefined(calculatorComponent.refs.result);
    });

});
