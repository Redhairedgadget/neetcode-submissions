class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let curMin = 1;
        let curMax = 1;
        let res = -Infinity;

        for (let n of nums) {
            let temp = curMin;
            curMin = Math.min(n*curMax, curMin * n, n);
            curMax = Math.max(curMax * n, temp * n, n);

            res = Math.max(res, curMin, curMax);
        }

        return res;
    }
}
