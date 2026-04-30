class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
    let minLength = Math.min(word1.length, word2.length);
    let res = '';
    let i = 0

    for (;i< minLength; i++) {
        res += word1[i];
        res += word2[i];
    }

    // Append remaining
    if (word1.length > i) {
        res += word1.substring(i, word1.length)
    }

    if (word2.length > i) {
        res += word2.substring(i, word2.length)
    }

    return res;
    }
}
