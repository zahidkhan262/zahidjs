// factorial with recursion
// function factorial(n) {
//     let fact = 1;
//     if (n > 0) { //base case
//         fact = n * factorial(n - 1)  //
//     }
//     return fact


// }
// console.log(factorial(1));


// todo fabonacci with loop

// const fabonacciWithLoop = (num) => {
//     let init = [0, 1];
//     let febo = 0;
//     for (let i = 0; i < num; i++) {
//         febo = init[i] + init[i + 1];
//         init.push(febo)
//     }
//     return init
// }

// console.log(fabonacciWithLoop(7), "loop")
// ?fabonacci with recursion

function fabonacci(n) {
    let res = [0]
    if (n < 2) {
        return n
    }
    return res = fabonacci(n - 1) + fabonacci(n - 2);



}
// 0,1,1,2,3,5,8,13,21,34
console.log(fabonacci(9), "recu")