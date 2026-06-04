class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;

        let ways = [1, 2];
        let i = 2;

        while (i < n) {
            [ways[0], ways[1]] = [ways[1], ways[0] + ways[1]]
            i++;
        }

        return ways[1];
    }
}
