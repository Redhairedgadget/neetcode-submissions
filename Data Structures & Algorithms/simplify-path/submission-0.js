class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let cur = '';

        for (let char of path + '/') {
            if (char === '/') {
                if (cur === '..') {
                    stack.pop();
                }
                else if (cur.length && cur !== '.' ) {
                    stack.push(cur);
                }

                cur = '';
            } else {
                cur += char
            }
        }

        return '/' + stack.join('/');
    }
}
