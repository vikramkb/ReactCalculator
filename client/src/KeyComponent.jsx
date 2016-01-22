/*eslint react/prefer-es6-class:0*/
"use strict";
import React, { PropTypes } from "react";
import KeyActions from "./KeyActions.js";

export default class KeyComponent extends React.Component {

    handleClick(event) {
        KeyActions.click(this.props.dispatch, this.props.keyChar);
    }

    render() {
        return (
            <button ref={"key" + this.props.keyChar} onClick={(event)=> this.handleClick(event)} className="calButton">{this.props.keyChar}</button>
        );
    }
}

KeyComponent.displayName = "KeyComponent";

KeyComponent.propTypes = {
    "keyChar": PropTypes.string.isRequired,
    "dispatch": PropTypes.func.isRequired
};
