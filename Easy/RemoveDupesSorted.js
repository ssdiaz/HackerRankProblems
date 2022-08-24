// 26. Remove Duplicates from Sorted Array, Easy
    // Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
    // Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
    // Return k after placing the final result in the first k slots of nums.
    // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    // ** [Video Explanation] // https://www.youtube.com/watch?time_continue=632&v=DEJAZBq0FDA&feature=emb_logo

    // Custom Judge:
        // The judge will test your solution with the following code:

            // int[] nums = [...]; // Input array
            // int[] expectedNums = [...]; // The expected answer with correct length

            // int k = removeDuplicates(nums); // Calls your implementation

            // assert k == expectedNums.length;
            // for (int i = 0; i < k; i++) {
            //     assert nums[i] == expectedNums[i];
            // }
        // If all assertions pass, then your solution will be accepted.
    
    // Example 1:
        // Input: nums = [1,1,2]
        // Output: 2, nums = [1,2,_]
        // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
        // It does not matter what you leave beyond the returned k (hence they are underscores).

    // Example 2:
        // Input: nums = [0,0,1,1,1,2,2,3,3,4]
        // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
        // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
        // It does not matter what you leave beyond the returned k (hence they are underscores).
        
    // Constraints:
        // 1 <= nums.length <= 3 * 104
        // -100 <= nums[i] <= 100
        // nums is sorted in non-decreasing order.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {    
    // Pseudocode
        // [0,1,1,2,2,3,3,4]
        //    i j 
        // iterate with i(0) and create j(i+1) 
        // only increase i when j is not a match

        // if duplicate, remove j with slice
            // increase j
            // nums.slice(j-1) // nums.slice(j,1) && nums.push(j) // FIRST THO

        /// if NOT duplicate
            // increase j
        // return nums
    

    // edge cases: empty array OR length of 1
    if (nums.length <= 1) return nums;
        
// First Attempt:
    // for (let i = 0; i < nums.length - 1; i++){
    //     let j = i + 1;
        
    //     while (j < nums.length){
    //         if (nums[i] === nums[j]) {
    //             nums.splice(j, 1);
    //         } else {
    //             j++;    
    //         }
    //     }
    // }
    // console.log(nums);


// Refactored code / Second Attempt, less memory: 
    // let i = 0;
    // let j = 1;
    
    // while (i < nums.length - 1 && j < nums.length){
    //     while (nums[i] === nums[j]){
    //         nums.splice(j, 1);
    //     }
    //     i++, j++;
    // }
    // console.log(nums);



// Two Pointer Examples
    // ~~ note: in video, they used left as the pointer and pointer was called previous ~~
    // [0,1,1,2,2,3,3,4] // START
    // [0,1,2,3,4,3,3,4] // END RESULT, return P
    //              L
    //                R
    //          P 
    
    // [0,0,1,1,1,2,2,3,3,4] //START
    // [0,1,2,3,4,2,2,3,3,4] // END RESULT, return P
    //                  L
    //                    R
    //          P
    
    // Refactored / Using 2 pointers method, most efficicent
    let pointer = 1, right = 1;
    
    while (right < nums.length){
        let left = right - 1;               // has to be inside to reset based on right
        if (nums[left] !== nums[right]){    // compare right to the previous ('left')
            nums[pointer] = nums[right];    // move the right value to be at pointer's spot
            pointer++;                      // increase pointer to represent new unique spot
        }
        right++;
    }
    return pointer;                         // returns the index at which it's unique. AND keeps length of array the same (linear memory storage)
};
    