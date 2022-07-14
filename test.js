function test(a) {
  // Write your code here
  
  //create object
  let lookup = {}
  
  //create the object from all items in array, a
  for (let i = 0; i < a.length; i++){
      let num = a[i];
      lookup[num] ? lookup[num] +=1 : lookup[num] = 1;
  }
  
  //iterate through object and find where it equals 1 
  for (let num in lookup){
      if (lookup[num] == 1) return num
  }
}

test([5,5,6])
