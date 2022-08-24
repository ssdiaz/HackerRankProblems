// 3. Longest Substring Without Repeating Characters, Medium

    // Given a string s, find the length of the longest substring without repeating characters.

    // Example 1:
        // Input: s = "abcabcbb"
        // Output: 3
        // Explanation: The answer is "abc", with the length of 3.

    // Example 2:
        // Input: s = "bbbbb"
        // Output: 1
        // Explanation: The answer is "b", with the length of 1.

    // Example 3:
        // Input: s = "pwwkew"
        // Output: 3
        // Explanation: The answer is "wke", with the length of 3.
        // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
        

        // Constraints:
            // 0 <= s.length <= 5 * 104
            // s consists of English letters, digits, symbols and spaces.




// *** NOTE: Answer not great: 7% better time, 5% better memory. ALSO this was the JPM question :) 

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // Pseudocode:
        //          i  j
        //     s = "a b c a b c b b"
        //          _ _ _ abc, a is dup (3)
        //            _ _ _ bca, b is dup (3)
        //              - - - cab, c is dup (3)
        //                 - - - abc, b is dup (3)
        //                   - - bc, b is dupe (2)
        //                        - b, b is dupe (1)
    
    // "a b c b b"
    // "p w w k e w"
    // "a a"
    
    if (s.length === 1) return 1;       // edge case
    if (s.length === 0) return null;    // edge case
    
    let max = 0;

    for (let i = 0; i < s.length - 1; i++){     // iterate through all s letters
        let count = 1;                          // count = 1 to count the first letter
        let j = i + 1;
        let set = {};                           // create a new set each iteration
        
        set[s[i]] = 1                           // create first letter in set

        while(!set[s[j]] && j < s.length){      // while the next letter doesn't already exist in set & j is still in the set
            set[s[j]] = 1                           // create the next letter, j 
            count++;                                
            j++;
        }
        
        if (count > max) max = count;   // max = Math.max(count, max); 
    }
    console.log(max)
    return max; 
};