// 326. Power of Three, Easy

    // Given an integer n, return true if it is a power of three. Otherwise, return false.
    // An integer n is a power of three, if there exists an integer x such that n == 3x.

    // Example 1:
        // Input: n = 27
        // Output: true

    // Example 2:
        // Input: n = 0
        // Output: false

    // Example 3:
        // Input: n = 9
        // Output: true
    

    // Constraints:
        // -231 <= n <= 231 - 1
    
    // Follow up: Could you solve it without loops/recursion?


/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {    
    // 3 * 3 * 3 //=> 27
    
    // My Solution: // using a loop (unfavorable) 
    // if (n ===1) return true;             // edge case
    
    // let number = 3;

    // // loop until the number is at or > than n
    // while (number <= n){
    //     if (number === n) return true;  // if the same, then true

    //     number = number * 3             // perform the power operation
    //     console.log(number, 'after')
    // }
    // return false;
    
    
    // Taken from Discussion; efficient:
    if(n === 3 || n === 1) return true;
    if(n < 3) return false;

    return isPowerOfThree(n / 3);
};