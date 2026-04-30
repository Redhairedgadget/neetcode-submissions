class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = -Infinity;
        let curMin = 1;
        let curMax = 1;

        for (let n of nums) {
            let temp = curMax;
            curMax = Math.max(n*curMax, n*curMin, n);
            curMin = Math.min(n*temp, n*curMin, n);
            res = Math.max(res, curMax, curMin);
        }

        return res;
    }
}
