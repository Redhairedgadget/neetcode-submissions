class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    calculate(base, num, op) {
        switch(op) {
            case '+': return base + num;
            case '-': return base - num;
            case '*': return base * num;
            case '/': return Math.trunc(base / num);
            default: return base;
        }
    }
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i< tokens.length; i++) {
            let curToken = tokens[i];
            if (!isNaN(curToken)) {
                stack.push(+curToken)
            } else {
                let num = stack.pop();
                let base = stack.pop();

                stack.push(this.calculate(base, num, curToken));
            }

            console.log(stack, curToken)
        }


        return stack[0]
    }
}
