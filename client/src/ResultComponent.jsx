/*eslint react/prefer-es6-class:0*/
"use strict";
import React, { PropTypes } from "react";

export default class ResultComponent extends React.Component {

    render() {
        return (
            <div>
                <div ref="result" className="equationDisplay">{this.props.result}</div>
                <div ref="equation" className="equationDisplay">{this.props.equation.join("")}</div>
            </div>
        );
    }
}

ResultComponent.displayName = "ResultComponent";

ResultComponent.propTypes = {
    "result": PropTypes.string.isRequired,
    "equation": PropTypes.object.isRequired
};
