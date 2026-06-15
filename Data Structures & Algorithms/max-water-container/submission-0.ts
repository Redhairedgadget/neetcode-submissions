class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let lowest = heights[left] <= heights[right] ? left: right;
            let newArea = (right - left) * heights[lowest];
            res = Math.max(res, newArea);

            if (lowest === left) left++;
            else right--;
        }

        return res;
    }
}
