class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        let dp = [1, 2];
        n -= 2;

        while (n) {
            let temp = dp[1];
            dp[1] = dp[0] + dp[1];
            dp[0] = temp;
            n--;
        }

        return dp[1]

    }
}
