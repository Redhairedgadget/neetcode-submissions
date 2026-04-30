class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const NUM_LENGTH = nums.length;
        const ans = Array(NUM_LENGTH * 2);
        
        for (let i = 0; i < NUM_LENGTH; i++) {
            ans[i] = nums[i];
            ans[i + NUM_LENGTH] = nums[i];
        }
        return ans
    }
}
