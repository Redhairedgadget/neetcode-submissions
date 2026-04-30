class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // Recursive

    // climbStairs(n, memo={}) {
    //     if (n <= 2) return n

    //     let res;

    //     if (n in memo) {
    //         res = memo[n]
    //     } else {
    //         res = this.climbStairs(n-2, memo) + this.climbStairs(n - 1, memo);
    //         memo[n] = res;
    //     }

    //     return res;
    // }

    // Iterative
    climbStairs(n) {
        if (n === 1) return n;
        let [one, two] = [1, 1];

        let res = 0;

        for (let i = 1; i < n; i++) {
            res = one + two;
            [one, two] = [res, one];
        }

        return res;
    }
}
