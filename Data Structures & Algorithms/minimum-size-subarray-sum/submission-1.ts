class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let l = 0;
        let r = 0;
        let res = Infinity;
        let total = 0;

        while (r < nums.length) {
            total += nums[r];
            r++; 

            while (total >= target) {
                res = Math.min(res, r - l)
                total -= nums[l];
                l++;
            }

        }

        return res === Infinity ? 0 : res;
    }
}
