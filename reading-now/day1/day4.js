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



// 14 june
const numbers = [1, 4, '1', '2', 4, 6, 6, 'a', 6, undefined, NaN];

const addUniqueNumber = (num) => {
    const numbers = num.map(Number).filter(ele => !Number.isNaN(ele))
    const unique = [...new Set(numbers)].reduce((prev,cur)=> prev +=cur ,0)
    // console.log(unique, "unique")
    
    return unique

}
console.log(addUniqueNumber(numbers))

find occurances in strings

const name = '  aabbcccabaabbcddbdzz  '

const findOccurances = (str) =>{
    let newStr = str.trim();
    const hashCount = {};
    for(let i=0; i< newStr.length; i++){
        let str = newStr[i]
        if(hashCount[str]){
            hashCount[str] += 1
        }else{
            hashCount[str] = 1
        }
    }
    return hashCount
}

console.log(findOccurances(name))


find occurances in array
let data11 = [20, 20, 40, 2, 30, 6, 9, 9,9,9,9]

const findOccurancesElement = (arr) =>{
    const hashELe = {};
    for(let i=0; i<arr.length; i++){
        let ele = arr[i];
        if(hashELe[ele]){
            hashELe[ele] +=1 
        }else{
            hashELe[ele] = 1
        }
    }
    return hashELe
}
console.log(findOccurancesElement(data11))

let num = [1, 3, 4,7, 5, 6, 2,8,10];
let n = num.length;

const findMissingNumber = (num,n) =>{
     num.sort((a,b)=> a - b)
    // sortNum = [1,2,3,5,6,7];
    let misingNum = 0
    for(let i=0; i< n; i++){
        if(num[i] - num[i + 1] !== -1){
            misingNum = num[i] +1
            break
        }
    }
    return misingNum
    
}
console.log(-2 !== -1)

console.log(findMissingNumber(num,n))


const person = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "Jane",
};
const anotherPerson2 = {
  name: "zahid",
};


//call
person.greet.call(anotherPerson, "Hello"); // Output: Hello, Jane!
person.greet.call(anotherPerson2, "hi"); // Output: hi, zahid!

//apply
const numbers = [1, 2, 3, 4, 5];
person.greet.apply(anotherPerson,["hi zahid"])


const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 5


const findFebonaciSeries = (n) =>{
    let febSeries = [0,1];
    
    for(let i=2; i<n; i++){
        let nexSeries = febSeries[i-1] + febSeries[i-2];
        febSeries.push(nexSeries)
    }
    return febSeries 
    
}
console.log(findFebonaciSeries(10))

// find missing number
const data = [1,3,4,5,20,27,29];

const filterData = (arr,len)=>{
 let missingNum = [];
 for(let i=1;i<=len;i++){
     if(arr.indexOf(i) === -1){
         missingNum.push(i)
     }
 }
return missingNum
}
console.log(filterData(data,Math.max(...data)))

let a = '01.23.45'
let b = '01.23.48'

const findLatestVersion = (str1,str2)=>{
    let latest;
    if(parseInt(str1) > parseInt(str2)){
        latest = str1
        // console.log(str1)
    }else{
        latest = str2;
        // console.log(str2)
    }
    
return `${latest} is latest version`
}
console.log(findLatestVersion(a,b))



const data = ['hello','world','react','js','react','world']

const findFrequency = (arr) =>{
    const freq = arr.reduce((allEle, ele)=>{
        if(ele in allEle){
            allEle[ele] +=1
        }else{
            allEle[ele] =1
        }
        return allEle
    },{})
    return freq
} 
console.log(findFrequency(data))

const arr1 = [
    {
    name:'a'   
    },
    {
    name:'b'    
    },
    {
    name:'c'    
    },
    ]
    
    for(let i=0; i<arr1.length; i++){
        switch(arr1[i].name){
            case 'a':
            console.log(arr1[i].name = "zahid")
            break;
            case 'b':
            console.log(arr1[i].name = "motu")
            break;
            case 'c':
            console.log(arr1[i].name = "patlu")
            break;
            default: 
            break
        }
    }


// find twosum
let arr = [2,3,5,7,90,23]
let target = 12;
let closet = 6;

const twoSum = (arr,target)=>{
    
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i ,j]
            }
        }
    }
    return []
}
console.log(twoSum(arr,target));
// find closest number
const findClosestNumber = (arr, target) => {
  let closest = arr[0]; // Assuming the first element is the closest initially

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(target - arr[i]) < Math.abs(target - closest)) {
      closest = arr[i];
    }
  }

  return closest;
}

console.log(findClosestNumber(arr, target));



// 
function foo(outer_arg) {

    function inner(inner_arg) {
      return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(10);

console.log(get_func_inner(4));

// 
function sum(a) {
  return function(b){
    if(!b){
        console.log("h")
        return a;
    }
    return sum(a+b);
  }
}
console.log(sum(1)(3)());  //21

function add(a){
    return function(b){
        if(!b){
            return a;
        }
        return add(a+b)
    }
}
console.log(add(1)(5)(49)(23)())

function makeRandomNumber() { 
    // return Math.floor(Math.random() * (1000000 - 10000 + 1) + 10000)
    return  Math.floor(Math.random()* 900000) + 100000
  }
  
  console.log(makeRandomNumber())

///////////////////////////////////////day 05 /////////////////////////////////



// let user ={
//     name:'zahid khan'
// }

// function sayHello(greet){
//     console.log(greet+ " " +this.name)
// }

// // sayHello("hii")

// sayHello.call(user,"hey call method") //call

// const hello = sayHello.bind(user,"bye bind method")
// hello() // bind

// sayHello.apply(user,["hello apply method"])

sayHello(a);

function sayHello(name) {
  console.log(`Hello ${name}`);
}
// var a = "zahid" // undefined
// let a = "zahid" //a not access before initialize
// const a = "zahid" // a not access before initialize


// promises chaining
new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
}).then((result) => {
  console.log(result); // will print '1' after 1 second
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2) // modify the value being resolved
      }, 1000)
  })
}).then((result) => {
  console.log(result); // will print '2' after another 1 second
  return result;
})

