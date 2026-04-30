class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        for (let c of s) {
            if (c !== ']') stack.push(c);
            else {
                let sub = '';
                while (stack.length && stack[stack.length-1] !== '[') {
                    sub = stack.pop() + sub;
                }

                // start bracket
                stack.pop();

                // num of subs
                let num = '';
                while (stack.length && !isNaN(stack[stack.length-1])) {
                    num = stack.pop() + num;
                }

                stack.push(sub.repeat(num))
            }
        }

        return stack.join('');
    }
}
