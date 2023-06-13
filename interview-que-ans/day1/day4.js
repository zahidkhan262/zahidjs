// code
/ let a = {}

// if(a){
//     console.log("hi")
// }else{
    
//     console.log("bye")
// }


// let x = Infinity;
// console.log(typeof x);
// let a = () => {
// console.log(this);
// };

// a();

// let x = "hello";
// let y = new String("hello");

// console.log(x == y);
// console.log(x === y);
// console.log(typeof y);


// let x = [];
// let y = [];
// let z = x + y;

// console.log(typeof z);


// let x = true;
// let y = false;
// // let z = x + y
// let z = x + y && x * y;

// console.log(z);


// function foo(a, b) {
// console.log(arguments[1]);
// }

// foo(3,"zahid");


// let x = "b";
// let y = "a";

// console.log(x + y + +1 + y);

// let x = [2];
// let y = 2;

// console.log(x == y);
// console.log(x === y);


// let x = { a: 1, b: 2 };
// let y = { b: 3 };
// let z = { ...x, ...y };

// console.log(z);

function fact(x){
   if (x == 0) {
        return 1;
    }
    return x * fact(x-1)
}
console.log(fact(4))
