class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let cur = '';

        for (let c of path + '/') {
            if (c === '/') {
                if (cur === '..') {
                    stack.pop();
                } else if (cur !== '.' && cur.length) {
                    stack.push(cur);
                }

                cur = '';
            } else {
                cur += c
            }
        }

        return '/' + stack.join('/')
    }
}
