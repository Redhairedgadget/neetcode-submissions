class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0] === val? 0: 1;
        let res = 0;
        let [start, end] = [0, 0];

        while (end < nums.length) {
            if (nums[start] === val) {
                end = start;

                // Find first non-value
                while (nums[end] === val) {
                    end++;
                }

                // swap
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp
            } else {
                start++;
                end++;
            }
        }
        
        return (start > 0 && nums[start - 1] !== undefined) ? start: start - 1;
        }
}
