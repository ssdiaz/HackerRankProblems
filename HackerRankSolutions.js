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
