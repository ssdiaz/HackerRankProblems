// FREQUENCY CHECK
function lonleyInteger(a) {    
    //create object
    let lookup = {}
    
    //create the object from all items in array
    for (let i = 0; i < a.length; i++){
        let num = a[i];
        lookup[num] ? lookup[num] +=1 : lookup[num] = 1;
    }
    
    //iterate through object and find where it equals 1 
    for (let num in lookup){
        if (lookup[num] == 1) return num
    }
  }

lonleyInteger([5,5,6])


// Alternative to counting | Sorting without comparison
function countingSort(arr) {
    // create integer array of 0s
    let n = 100
    let integerArr = new Array(n).fill(0);
    
    //iterate and count values --- iteration didn't pass all tests
    // for (let i = 0; i < n; i++){
    //     let number = arr[i];     // will be the value
    //     integerArr[number]++;
    // }
    
    for (let num of arr){
        integerArr[num]++;
    }
    
    return integerArr;
}



//Caesar's Cipher ** didn't pass all tests **
    function caesarCipher(s, k) {
        let originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
        let newAlphabet = [...originalAlphabet.slice(k), ...originalAlphabet.slice(0,k)];
            
        let cipher = {};
        for (let i = 0; i < originalAlphabet.length; i++) {
            cipher[originalAlphabet[i]] = newAlphabet[i];
        }
        
        let newString = "";
        for (let letter of s) {
            if (!letter.match(/^[a-zA-Z]+$/)) {
                newString += letter;
            } else if (cipher[letter]) {
                newString += cipher[letter];
            } else {
                letter = cipher[letter.toLowerCase()];
                newString += letter.toUpperCase();
            }
        }
        // console.log(newString)
        return newString;
    }

    caesarCipher('middle-Outz', 2) // okffng-Qwvb
    caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5) // Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj







    






    function flippingMatrix(matrix) {
        // Write your code here
        //max sums of upper left
        
        //function reverse
        
        //be able to select row or column
            
        //iterate thru each array and do:
            // row 0 - put highest in last -0
            // row 1 - put highest in last -1
            // row 2 - put highest in last -2
            // row 3 - put highest in last -3
            // ...
        
        const swap = (arr,a,b) => {
            [arr[a], arr[b]] = [arr[b], arr[a]];
        }
        
        for (let array of matrix) {
            for (let i = 0; i < array.length; i++){
                if (array[i] > array[i+1]) swap(array, i, i+1)
            }      
        }
        
        // THEN flip veritcally so that: ...
            // row 0 - no flip
            // row 1 - flip column last -1 w/ row 0
            // row 2 - flip column last -2 w/ row 0
            // ...
        
    
        //LAST - return sum of first array
        let sum = 0;
        for (let i=0; i < matrix[0].length; i++){
            sum += matrix[0][i]
        }
        console.log(sum)
        return sum;
    }