class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let res = 1;
        let l = 0;
        let r = 0;
        let count = {} // letter: number
        let maxFreq = 0;

        while (r < s.length) {
            let curLetter = s[r];
            if (!(curLetter in count)) count[curLetter] = 0;
            count[curLetter]++;

            maxFreq = Math.max(maxFreq, count[curLetter])

            while ((r - l + 1 - maxFreq) > k) {
                count[s[l]]--;
                l++;
            }
            
            res = Math.max(res, r - l + 1)
            r++;
        }

        return res;
    }
}
