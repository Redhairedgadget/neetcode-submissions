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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        if (!root) return root;
        const pVal = p.val;
        const qVal = q.val;
        const low = Math.min(pVal, qVal);
        const high = Math.max(pVal, qVal);

        if (root.val < low) return this.lowestCommonAncestor(root.right, p, q);
        if (root.val > high) return this.lowestCommonAncestor(root.left, p, q);
        return root;
    }
}
