/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
   let k = 1;
    let appear = 1;
        for(let i = 1; i < nums.length; i++){
            if(nums[i] == nums[i - 1]){
                if(appear == 1){
                    nums[k] = nums[i];
                    k++;
                    appear++;
                }else if(appear == 2)   continue;
                 }else{
                nums[k] = nums[i];
                k++;
                appear = 1;
            }
        }
        return k;
    }
