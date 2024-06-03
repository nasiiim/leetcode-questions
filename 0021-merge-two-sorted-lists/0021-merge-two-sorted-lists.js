/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let fh = new ListNode(-1);
    let current = fh;
    while(list1 || list2){

        if(list2 == null || (list1 !== null && list1.val <= list2.val)){
            fh.next = list1;
            fh = fh.next;
           list1 = list1.next;
        } else {
            fh.next = list2;
            fh = fh.next;
            list2 = list2.next;
        }
    }
    return current.next;
};