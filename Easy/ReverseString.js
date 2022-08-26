// 344. Reverse String,  Easy

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

    // Example 1:
        // Input: s = ["h","e","l","l","o"]
        // Output: ["o","l","l","e","h"]

    // Example 2:
        // Input: s = ["H","a","n","n","a","h"]
        // Output: ["h","a","n","n","a","H"]
    
    // Constraints:
        // 1 <= s.length <= 105
        // s[i] is a printable ascii character.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // Tried recursion, but didn't work:
        // if(s.length <= 1) return s;
        // console.log(s, s[0])
        // return reverseString(s.slice(1) + s[0]
    
//     let flips = Math.floor(s.length / 2)
//     let i = 0;
//     let right = s.length - 1
    
//     while(flips){
//         // ES6 swap method replacing below
//         [s[i],s[right-i]] = [s[right-i],s[i]] 
//         // let temp = s[i]
//         // s[i] = s[right - i] ;
//         // s[right - i]  = temp; 

//         flips--;
//         i++;
//     }
//     console.log(s)
    
    // Even better solution
    for(let i = 0; i < s.length / 2; i++){
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
    }
};