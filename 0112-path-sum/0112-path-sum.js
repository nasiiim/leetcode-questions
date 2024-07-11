/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    var bool=false;
    
    function countSum(root,newSum)
    {
        if(!root)
            return;
        newSum+=root.val;
        if(root.left==null && root.right==null)
        {
            if(targetSum==newSum)
            {
                bool=true;
                return;
            }
        }
        else
        {
            countSum(root.left,newSum);
            countSum(root.right,newSum);
        }
    }
        
    countSum(root,0);
    return bool;
};