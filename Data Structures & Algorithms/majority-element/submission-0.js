class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hash = {};

        for(let num of nums) {
            if (hash.hasOwnProperty(num)) {
                hash[num]++
            } else {
                hash[num] = 1;
            }
        }

        let half = Math.floor(nums.length/2);

        for (let key in hash) {
            if (hash[key] > half) {
                return +key;
            }
        }

        return 0;
    }
}
