class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length == 1) return nums[0];
        let maxSum = nums[0];
        let curSum = 0;

        for (let i = 0; i < nums.length; i++) {
            curSum = Math.max(curSum, 0);
            curSum += nums[i];
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}
