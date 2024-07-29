/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) products[i] = 1;
    else products[i] = products[i - 1] * nums[i - 1];
  }

  let product;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) product = 1;
    else product *= nums[i + 1];

    products[i] *= product;
  }

  return products;
};