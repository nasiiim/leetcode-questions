/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = null
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (start === null) {
      start = nums[i]
    }
    if (nums[i] === nums[i + 1] - 1) {
      continue
    }
    if (nums[i] === start) {
      result.push(nums[i].toString())
      start = null
    } else {
      result.push(`${start}->${nums[i]}`)
      start = null
    }
  }
  return result
};