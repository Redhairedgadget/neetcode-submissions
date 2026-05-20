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
     * @param {number[]} inorder
     * @param {number[]} postorder
     * @return {TreeNode}
     */
    buildTree(inorder: number[], postorder: number[]): TreeNode {
        // postorder: left right root

        if (!inorder.length || !postorder.length) return null;
        
        let curRootVal = postorder.pop();
        let root = new TreeNode(curRootVal);
        let mid = inorder.indexOf(curRootVal);
        root.right = this.buildTree(inorder.slice(mid + 1), postorder);
        root.left = this.buildTree(inorder.slice(0, mid), postorder);

        return root;
    }
}
