// Longest Common Prefix, Easy
    // Write a function to find the longest common prefix string amongst an array of strings.
    // If there is no common prefix, return an empty string "".
    
    // Example 1:
        // Input: strs = ["flower","flow","flight"]
        // Output: "fl"
    
    // Example 2:
        // Input: strs = ["dog","racecar","car"]
        // Output: ""
        // Explanation: There is no common prefix among the input strings.

    // Constraints:
        // 1 <= strs.length <= 200
        // 0 <= strs[i].length <= 200
        // strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {         // strs is the array of strings
    if (strs.length === 1) return strs[0];          // if strs is only 1 array [edge case]
    
    let results = '';
    let string1 = strs[0];
    
    for (let i = 0; i < string1.length; i++){       // i is each letter in the 1st s only
        let currentLetter = string1[i];             // letters of the first string        
        let count = 0;
        
        for (let string of strs) {                  // for each string in array
            if (string[i] !== currentLetter) return results;
            count++;
            if (count === strs.length) results += currentLetter;   
        }
    }
    return results;
};




// Results:
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))
// => 'fl'

let strs2 = ["cir","car"]
console.log(longestCommonPrefix(strs2))
// => 'c'

let strs3 = ["",""]
console.log(longestCommonPrefix(strs3))
// => ''