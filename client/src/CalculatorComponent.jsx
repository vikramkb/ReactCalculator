/*eslint react/prefer-es6-class:0*/
"use strict";
import React, { PropTypes } from "react";
import ResultComponent from "./ResultComponent.jsx";
import KeyBoardComponent from "./KeyBoardComponent.jsx";
import { connect } from "react-redux";

export class CalculatorComponent extends React.Component {

    render() {
        return (
            <div className="main">
                <ResultComponent ref="result" equation={this.props.result.equation} result={this.props.result.result} dispatch={this.props.dispatch}/>
                <KeyBoardComponent ref="keyboard" dispatch={this.props.dispatch}/>
            </div>
        );
    }
}

CalculatorComponent.displayName = "CalculatorComponent";

CalculatorComponent.propTypes = {
    "result": PropTypes.string.isRequired,
    "equation": PropTypes.object.isRequired,
    "dispatch": PropTypes.func.isRequired
};

function select(store) {
    return store;
}
export default connect(select)(CalculatorComponent);
