class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;

        for (let i = 1; i< nums.length;) {
            if (nums[k] !== nums[i]) {
                k++;
                i++;
            } else {
                while (nums[k] == nums[i]) {
                    i++;
                }

                if (i <= nums.length - 1) {
                    k++;
                    nums[k] = nums[i];
                }
            }
        }

        return k + 1
    }
}
