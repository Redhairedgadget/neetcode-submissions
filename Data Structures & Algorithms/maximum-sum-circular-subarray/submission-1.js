class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let total = 0;
        let maxSum = -Infinity;
        let minSum = Infinity;

        let curMaxSum = 0;
        let curMinSum = 0;

        for (let i = 0; i < nums.length; i++) {
            // Always increment total
            total += nums[i];

            // Calculate maxSum
            curMaxSum = Math.max(curMaxSum, 0);
            curMaxSum += nums[i];
            maxSum = Math.max(curMaxSum, maxSum);

            // Calculate minSum
            curMinSum = Math.min(curMinSum, 0);
            curMinSum += nums[i];
            minSum = Math.min(curMinSum, minSum);
        }

        console.log(maxSum, total, minSum)

        return maxSum < 0 ? maxSum: Math.max(maxSum, total - minSum);
    }
}
