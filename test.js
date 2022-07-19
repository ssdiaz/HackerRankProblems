function test(a) {  
    //create object
    let lookup = {}
  
  //create the object from all items in array, a
  for (let i = 0; i < a.length; i++){
      let num = a[i];
      lookup[num] ? lookup[num] +=1 : lookup[num] = 1;
  }
  
  //iterate through object and find where it equals 1 
  for (let num in lookup){
    //   if (lookup[num] == 1) console.log(num)Z
      if (lookup[num] === 1) return num;
  }


}

console.log(test([4, 6, 5, 17, 3, 5, 2,  17, 88, 4, 88, 3, 2]))
