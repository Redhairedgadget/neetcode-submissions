class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let mySet = new Set();

        for (let num of nums) {
            if (mySet.has(num)) return num;
            else mySet.add(num)
        }
    }
}
