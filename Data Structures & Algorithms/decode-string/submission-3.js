class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        for (let char of s) {
            if (char === ']') {
                let curSub = '';
                while (stack.length && stack[stack.length-1] !=='[') {
                    curSub = stack.pop() + curSub;
                }

                // pop start bracket
                stack.pop();

                let numStr = '';
                while (stack.length && !isNaN(stack[stack.length-1])) {
                    numStr = stack.pop() + numStr;
                }

                stack.push(curSub.repeat(numStr));

            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    }
}
