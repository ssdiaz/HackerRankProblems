// 27. Remove Element, Easy

    // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

    // Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    // Return k after placing the final result in the first k slots of nums.

    // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    // Custom Judge:
        // The judge will test your solution with the following code:
        // int[] nums = [...]; // Input array
        // int val = ...; // Value to remove
        // int[] expectedNums = [...]; // The expected answer with correct length.
        //                             // It is sorted with no values equaling val.
        // int k = removeElement(nums, val); // Calls your implementation
        // assert k == expectedNums.length;
        // sort(nums, 0, k); // Sort the first k elements of nums
        // for (int i = 0; i < actualLength; i++) {
        //     assert nums[i] == expectedNums[i];
        // }
        // If all assertions pass, then your solution will be accepted.

    // Example 1:
        // Input: nums = [3,2,2,3], val = 3
        // Output: 2, nums = [2,2,_,_]
        // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
        // It does not matter what you leave beyond the returned k (hence they are underscores).

    // Example 2:
        // Input: nums = [0,1,2,2,3,0,4,2], val = 2
        // Output: 5, nums = [0,1,4,0,3,_,_,_]
        // Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
        // Note that the five elements can be returned in any order.
        // It does not matter what you leave beyond the returned k (hence they are underscores).
        

    // Constraints:
        // 0 <= nums.length <= 100
        // 0 <= nums[i] <= 50
        // 0 <= val <= 100


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    // My IdeaTo Solve:
        // searches (length) = 8
        // Input: nums = [0,1,2,2,3,0,4,2], val = 2
        //                i -  8 searches
        //                   i -  7 searches
        //                     i - 6 searches left 
        //                     does: push & splice. & make search--;
        //               [0,1,_,2,3,0,4,2,| 2], val = 2
        //               [0,1,2,3,0,4,2,| 2], val = 2
        //                    i is still (@ index 2) so it skips this item :/
        //               [0,1,2,3,0,4,2,| 2], val = 2
        //                      i, 5 searches left (@ index 2)
        //                     does: push & splice. & make search--;
        //               [0,1,_,3,0,4,2,| 2, 2], val = 2
        //                      i, 4 searches left
        //                        i, 3 searches left
        //                          i, 2 searches left
        //                             i , 1/last search
        //                      does: push & splice. & make search--;
        //                      search = 0 DONE
    
    // Edge Cases; should be covered below
        // if (nums.length === 0) return nums;
        // if (nums.length === 1 && val === nums[0]) return [];
    
    // let searches = nums.length;
    
    // for (let i = 0; searches; i++){
    //     let num = nums[i];
    //     console.log('nums:', nums)
    //     console.log('looking at: ', num, 'i of:', i)
        
    //     if(num === val){
    //         // nums.push(num);     // push num to end of array
    //         console.log('removing', nums[i])
    //         nums.splice(i, 1);   // splice to remove number
    //         // searches--;
    //         i--;
    //         console.log('i is: ', i, nums[i])
    //         console.log(nums, 'changed')
    //     }
    //     searches--;    
    //     console.log(searches, 'searches left now')
    // }
    // console.log(nums);
    // // return nums;


    // my code refactored:
        // [3,2,2,3], val = 3
        //  k          n = 4 
        //  i yes equals
        // [_,2,2,3]
        //    k        n = 4 
        //  i
        // [2,2,3,_]
        //<-i
        // NEXT
        // [2,2,3,_]
        //  i 
        //    k
        // NEXT
        // [2,2,3,_]
        //    i 
        //    k
        // NEXT
        // [2,2,3,_]
        //      i 
        //    k
        // [2,2,_,_]
        //      i 
        //      k
        // [2,2,_,_]
        //      i 
        //      k
        // technically should stop iteration here...

        let removed = 0;
        let len = nums.length;
        
        for (let i = 0; i < len - removed; i++){
            if(nums[i] === val){
                removed++;
                nums.splice(i, 1);   // splice to remove number
                nums.push("_");      // push num to end of array to keep same array length
                i--;
            }
        }
        return len - removed;       // return the amount left in array after removing value (removed should actually be called k)
};