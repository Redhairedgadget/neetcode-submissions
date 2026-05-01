class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo={}) {
        if (n <= 2) return n;
        
        if (!(n in memo)) {
            memo[n] = this.climbStairs(n-1, memo) + this.climbStairs(n-2, memo);
        }
        return memo[n];
    }
}
