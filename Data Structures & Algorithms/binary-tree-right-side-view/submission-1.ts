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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return []
        let queue: TreeNode[] = [root]
        let res = [];

        while (queue.length) {
            let levelLength = queue.length;
            let seen = false
            while (levelLength) {
                let cur = queue.shift();

                if (!seen) {
                    res.push(cur.val);
                    seen = true;
                }

                if (cur.right) queue.push(cur.right)
                if (cur.left) queue.push(cur.left)

                levelLength--;
            }
        }

        return res;
    }
}
