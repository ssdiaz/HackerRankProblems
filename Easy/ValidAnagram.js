// 242. Valid Anagram, Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    // Example 1:
        // Input: s = "anagram", t = "nagaram"
        // Output: true

    // Example 2:
        // Input: s = "rat", t = "car"
        // Output: false
    
    // Constraints:
        // 1 <= s.length, t.length <= 5 * 104
        // s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let lookup = {}
    
    for (let i of s) {
        lookup[i] = (lookup[i] || 0) + 1;
    }
    
    for (let j of t) {

        // if (!lookup[j]) return false;
        // lookup[j] = (lookup[j] || 0) - 1;
        if (!lookup[j]) {
            return false;
        } else {
            lookup[j] -= 1;
        }

    }
    
    // for (let k in lookup) {
    //     if (lookup[k] !== 0) return false;
    // }
    
    return true;
};