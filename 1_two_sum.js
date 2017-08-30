/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {}; // remain_value:index
    var result = [];
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]] !== undefined){
            result.push(hash[nums[i]]);
            result.push(i);
           }else{
           hash[target-nums[i]] = i;
           }
    }
    //console.log(hash);
    return result;
};