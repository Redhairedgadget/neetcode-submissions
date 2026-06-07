class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        while (n) {
            if (n & 1) count++;
            n = n >> 1;
        }

        return count
    }
}
