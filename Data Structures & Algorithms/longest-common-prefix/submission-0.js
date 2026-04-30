class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let maxPrefixLength = Infinity;

        for (let str of strs) {
            maxPrefixLength = Math.min(maxPrefixLength, str.length)
        }

        let res = '';
        let end = false;

        for (let i = 0; i< maxPrefixLength; i++) {
            let char = strs[0][i];

            for (let j = 1; j < strs.length; j++) {
                let str = strs[j]
                if (str[i] != char) {
                    end = true;
                    break;
                }
            }

            if (end) break;
            else res += char;
        }

        return res;
    }
}
