class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [];

        for (let i = 0; i <= n; i++) {
            let curNum = i;
            let curCount = 0;
            while (curNum) {
                if (curNum & 1) curCount++;
                curNum = curNum >> 1;
            }

            res.push(curCount);
        }

        return res;
    }
}
