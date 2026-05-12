class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let colorsReg = new Array(3).fill(0);

        for (let num of nums) {
            colorsReg[num] += 1;
        }

        let i = 0;
        let colorI = 0

        while (colorI < colorsReg.length && i < nums.length) {
            while(colorsReg[colorI]) {
                nums[i] = colorI;
                i++;
                colorsReg[colorI]--;
            }
            colorI++;
        }
    }
}
