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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        if (!root) return new TreeNode(val);

        function helper(node: TreeNode): void {
            if (val > node.val) {
                if (node.right) helper(node.right);
                else node.right = new TreeNode(val);
            } else {
                if (node.left) helper(node.left);
                else node.left = new TreeNode(val);
            }
        }

        helper(root);
        return root;
    }
}
