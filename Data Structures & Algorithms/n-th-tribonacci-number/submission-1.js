class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n, memo={}) {
        if (n == 0 | n == 1) return n;
        if (n == 2) return 1;

        if (!(n in memo)) {
            memo[n] = this.tribonacci(n - 1, memo) + this.tribonacci(n - 2, memo) + this.tribonacci(n-3, memo);
        }


        return memo[n]
    }
}
