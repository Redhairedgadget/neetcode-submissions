class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0; 

        let charSet = new Set<string>();
        let res = 0;

        while (r < s.length) {
            let newChar = s[r];

            // duplicate
            if (charSet.has(newChar)) {
                while (charSet.has(newChar)) {
                    charSet.delete(s[l]);
                    l++;
                }
            }
            charSet.add(newChar);
            res = Math.max(r-l + 1, res);
            r++;
        }

        return res;
    }
}
