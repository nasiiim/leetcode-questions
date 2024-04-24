/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 
  let count = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (count === 0) {
      majority = num;
    }

    if (num === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
};