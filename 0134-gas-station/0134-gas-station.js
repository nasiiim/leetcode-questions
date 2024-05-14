/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
        let sum = 0;
        let index = 0;	
       let total = 0;	
        for(let i = 0; i < gas.length; i++){
            sum += gas[i] - cost[i];	
            if(sum < 0){
                total += sum;
                sum = 0;
                index = i + 1;
            }
        }
        total += sum;
        return total < 0 ? -1: index;
};