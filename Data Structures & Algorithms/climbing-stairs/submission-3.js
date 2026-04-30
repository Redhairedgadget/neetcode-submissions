class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo={}) {
        if (n <= 2) return n

        let res;

        if (n in memo) {
            res = memo[n]
        } else {
            res = this.climbStairs(n-2, memo) + this.climbStairs(n - 1, memo);
            memo[n] = res;
        }

        return res;
    }
}
