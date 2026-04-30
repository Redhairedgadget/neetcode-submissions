class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [] // [temp, i]

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && stack[stack.length-1][0] < temperatures[i]) {
                let [_, oldI] = stack.pop();
                res[oldI] = i - oldI;
            }

            stack.push([temperatures[i], i])
        }

        return res;
    }
}
