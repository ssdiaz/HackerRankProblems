// Two Sum, Easy

    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    // You can return the answer in any order.

    // Example 1:
        // Input: nums = [2,7,11,15], target = 9
        // Output: [0,1]
        // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    // Example 2:
        // Input: nums = [3,2,4], target = 6
        // Output: [1,2]

    // Example 3:
        // Input: nums = [3,3], target = 6
        // Output: [0,1]
        
    // Constraints:
        // 2 <= nums.length <= 104
        // -109 <= nums[i] <= 109
        // -109 <= target <= 109
        // Only one valid answer exists.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// Solution #1 - I believe it's O(n)
//  var twoSum = function(nums, target) {
//     let answerPos1; 
//     let answerPos2;  

//     nums.forEach( (numberA, indexA) => {
//         for (let indexB = indexA + 1; indexB < nums.length; indexB++){
//             let numberB = nums[indexB]            

//              if ( numberA + numberB == target ) {                
//                  answerPos1 = indexA
//                  answerPos2 = indexB
//              }
//         }
//     })
//         return  [answerPos1, answerPos2]
// };

// twoSum([2,7,11,15], 9)


// Using Two Pointer Solution
function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
        
    while (left < right) {
        let sum = nums[left] + nums[right]
        
        if (sum === target) {
            console.log(nums[left], nums[right])
            console.log([left, right])
            return (left, right); 
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    // return -1; 
}

twoSum([2,7,11,15], 9)