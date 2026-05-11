// Insertion sort
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        for (let i = 1; i < nums.length; i++) {
            let j = i;
            let smallerJ = j - 1;

            while (smallerJ > -1 && j > 0) {
                if (nums[j] < nums[smallerJ]) {
                    [nums[j], nums[smallerJ]] = [nums[smallerJ], nums[j]];
                    j--;
                }

                smallerJ--;
            }
        }

        return nums;
    }
}
