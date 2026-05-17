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
     * @param {number} key
     * @return {TreeNode}
     */

    getSmallestChild(node: TreeNode): TreeNode {
        while (node.left) node = node.left;
        return node;
    }

    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (!root) return root;

        if (key > root.val) root.right = this.deleteNode(root.right, key);
        else if (key < root.val) root.left = this.deleteNode(root.left, key)

        else {
            if(!root.left) return root.right;
            else if (!root.right) return root.left;

            // two children
            else {
                let smallest = this.getSmallestChild(root.right);
                root.val = smallest.val;
                root.right = this.deleteNode(root.right, smallest.val)
            }
        }

        return root;
    }
}
