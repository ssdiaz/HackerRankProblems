// function test(a) {  
//     //create object
//     let lookup = {}
  
//   //create the object from all items in array, a
//   for (let i = 0; i < a.length; i++){
//       let num = a[i];
//       lookup[num] ? lookup[num] +=1 : lookup[num] = 1;
//   }
  
//   //iterate through object and find where it equals 1 
//   for (let num in lookup){
//     //   if (lookup[num] == 1) console.log(num)Z
//       if (lookup[num] === 1) return num;
//   }
// }
// console.log(test([4, 6, 5, 17, 3, 5, 2,  17, 88, 4, 88, 3, 2]))



// function findMedian(arr) {
//     let mediumIndx = Math.round(arr.length/2)-1

//     const swap = (arr, a, b) => (
//       [arr[a], arr[b]] = [arr[b], arr[a]]
//     )
//       for (let i = 0; i < arr.length; i ++){
//         let lowest = i;
//         for (let j = i+1; j < arr.length; j++){
//           if (arr[lowest] > arr[j]){
//           lowest = j;
//         }
//       }
//       if (i !== lowest) swap(arr,i,lowest);
//     }

//     console.log(arr[mediumIndx])
//     return arr[mediumIndx];
// }
// findMedian([0,1,2,3,4,5,6])


var isPowerOfThree = function(n) {

  console.log(45 % 3)

  if (n % 3 === 0 && n !== 0) {
      console.log('true')
      return true
  } else {
      console.log('false')
      return false
  }
};
isPowerOfThree(27)

