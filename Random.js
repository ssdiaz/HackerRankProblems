// What is the output for:
function test(value){
    if (value > 0 ){
        test(value - 1)
    }
    console.log(value);
}

test(6)
// recusion question BUT the method has to finish, and since console.log is there w/o a conditional and not waiting on info it will print.
    // the recursion part is probably sent to the call stack to wait until the first method finishes
// 0
// 1
// 2
// 3
// 4
// 5
// 6