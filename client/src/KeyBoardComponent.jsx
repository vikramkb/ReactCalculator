"use strict";
import React, { PropTypes } from "react";
import KeyComponent from "./KeyComponent.jsx";

export default class KeyBoardComponent extends React.Component {
    render() {
        return (
            <div>
                <div ref="keysFirstRow">
                    <KeyComponent ref="key1" dispatch = {this.props.dispatch} keyChar = {"1"}/>
                    <KeyComponent ref="key2" dispatch = {this.props.dispatch} keyChar = {"2"}/>
                    <KeyComponent ref="key3" dispatch = {this.props.dispatch} keyChar = {"3"}/>
                    <KeyComponent ref="key4" dispatch = {this.props.dispatch} keyChar = {"4"}/>
                    <KeyComponent ref="key5" dispatch = {this.props.dispatch} keyChar = {"5"}/>
                </div>

                <div ref="keysSecondRow">
                    <KeyComponent ref="key6" dispatch = {this.props.dispatch} keyChar = {"6"}/>
                    <KeyComponent ref="key7" dispatch = {this.props.dispatch} keyChar = {"7"}/>
                    <KeyComponent ref="key8" dispatch = {this.props.dispatch} keyChar = {"8"}/>
                    <KeyComponent ref="key9" dispatch = {this.props.dispatch} keyChar = {"9"}/>
                    <KeyComponent ref="key0" dispatch = {this.props.dispatch} keyChar = {"0"}/>
                </div>

                <div ref="keysThirdRow">
                    <KeyComponent ref="keyplus" dispatch = {this.props.dispatch} keyChar = {"+"}/>
                    <KeyComponent ref="keyminus" dispatch = {this.props.dispatch} keyChar = {"-"}/>
                    <KeyComponent ref="keydivision" dispatch = {this.props.dispatch} keyChar = {"/"}/>
                    <KeyComponent ref="keymultiplication" dispatch = {this.props.dispatch} keyChar = {"*"}/>
                    <KeyComponent ref="keyequal" dispatch = {this.props.dispatch} keyChar = {"="}/>
                </div>
            </div>
        );
    }
}

KeyBoardComponent.displayName = "KeyComponent";

KeyBoardComponent.propTypes = {
    "dispatch": PropTypes.func.isRequired
};
