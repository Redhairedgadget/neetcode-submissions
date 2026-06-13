class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let [l, r] = [0, s.length - 1];
        let letters = new Set<string>();

        for (let i = 0; i < 26; i++) {
            letters.add(String.fromCharCode('a'.charCodeAt(0) + i));
        }

        for (let i = 0; i <= 9; i++) {
            letters.add(String(i));
        }

        s = s.toLowerCase();

        while (l < r) {
            // check if character
            while (l < r && !(letters.has(s[l]))) {
                l++;
            }
            while (l < r && !(letters.has(s[r]))) {
                r--;
            }

            // exit if went out of bounds
            if (l >= r) break;

            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}