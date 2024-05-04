/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     var min = 0;
 var max = nums.length - 1;
    let guess = 0
    
    while(min <= max) {
    const mid = Math.floor((max + min) / 2);
        if (nums[mid] === target) {
        return mid;
    }
    else if (nums[mid] < target) {
        min = mid + 1;
        guess = mid+1
    }
    else {
        max = mid - 1
        guess = mid;
    }
    }
    return guess
};