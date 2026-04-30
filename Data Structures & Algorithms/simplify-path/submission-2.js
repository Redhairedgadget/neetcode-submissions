class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let curSub = '';

        for (let char of path + '/') {
            if (char != '/') {
                curSub += char;
            } else {
                if (curSub == '..') {
                    stack.pop();
                }
                
                else if (curSub.length && curSub !== '.') {
                    stack.push(curSub);
                }

                curSub = ''
            }
        }

        return '/' + stack.join('/');
    }
}
