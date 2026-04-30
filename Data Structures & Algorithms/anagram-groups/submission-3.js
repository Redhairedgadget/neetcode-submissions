class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}; // map count of letters to array of strings that match it

        for (let s of strs) {
            let count = Array(26).fill(0);
            for (let char of s) {
                const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[charIndex] += 1;
            }
            let key = count.join(',');

            if (!hash[key]) {
                hash[key] = [];
            }
            hash[key].push(s)
        }

        return Object.values(hash);
    }
}
