/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
        let left = -1, right = -1;
       let result = nums.length;
        let sum = 0;
        let flag = false;
        while(left < len){
            if(sum < target && right < len){
                if(++right >= len) break;
                sum += nums[right];
            }
            if(sum >= target){
                flag = true;
                result = Math.min(result, right - left);
                if(left < right){
                    sum -= nums[++left];
                }else return 1;
            }
        }
        return flag ? result : 0;
};