/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];
        let queue = [root];
        let res = [];

        while (queue.length) {
            let levelCount = queue.length;
            let level = [];
            while (levelCount) {
                let cur = queue.shift();
                level.push(cur.val);
                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
                levelCount--;
            }

            res.push(level)
        }

        return res;
    }
}
