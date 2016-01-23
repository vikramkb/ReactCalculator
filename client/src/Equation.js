"use strict";

/* temporary changes for calculator */
export default class Equation {

    static instance(array) {
        return new Equation(array);
    }

    constructor(array) {
        this.array = array;
    }
    // accepts number (real numbers) and string ('-','+','*','/') only and return a real number.
    result() {
        return this.evalPostFixExpression(this.getPostfix());
    }

    getPostfix() {
        var operator = ["-", "+", "*", "/"];
        var stack = [];
        var postfix = [];

        while(this.array.length > 0) {
            let value = this.array.shift();
            if(!this.isOperator(value) ) {
                postfix.push(value);
            } else {
                if(stack.length < 1) {
                    stack.push(value);
                } else if(operator.indexOf(value)>operator.indexOf(stack[stack.length-1])) {
                    stack.push(value);
                } else {
                    while(operator.indexOf(value)<operator.indexOf(stack[stack.length-1])){
                        postfix.push(stack.pop());
                    }
                    stack.push(value);
                }
            }
        }
        while(stack.length > 0) {
            postfix.push(stack.pop());
        }

        return postfix;
    }

    evalPostFixExpression(postfixArray) {
        var resultStack = [];
        while(postfixArray.length>0) {
            let value = postfixArray.shift();
            if(!this.isOperator(value)) {
                resultStack.push(value);
            } else {
                var secondOperand = resultStack.pop();
                var firstOperand = resultStack.pop();
                resultStack.push(this.evaluate(firstOperand,value,secondOperand));
            }
        }
        return resultStack.shift();
    }

    evaluate(firstOperand, operator, secondOperand) {
        switch(operator) {
            case "+":
                return firstOperand + secondOperand;
            case "-":
                return firstOperand - secondOperand;
            case "*":
                return firstOperand * secondOperand;
            case "/":
                return secondOperand == 0 ? 0: firstOperand/secondOperand;
        }
        return;
    }

    isOperator(character){
        var operator = ["-", "+", "*", "/"];
        let NEGATIVE_INDEX = -1;
        return operator.indexOf(character) > NEGATIVE_INDEX;
    }
};