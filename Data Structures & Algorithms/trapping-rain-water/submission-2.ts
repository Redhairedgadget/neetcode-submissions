class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let maxLeft = new Array(height.length).fill(0);
        let maxRight = new Array(height.length).fill(0);

        // fill maxLeft
        for (let left = 1; left < height.length; left++) {
            maxLeft[left] = Math.max(maxLeft[left-1], height[left-1])
        }

        // fill maxRight
        for (let right = height.length - 2; right > -1; right--) {
            maxRight[right] = Math.max(maxRight[right+1], height[right+1])
        }

        // calculate heights
        let res = 0;

        for (let i = 0; i < height.length; i++) {
            let minH = Math.min(maxLeft[i], maxRight[i]);
            res += Math.max(0, minH - height[i])
        }

        return res;
    }
}
