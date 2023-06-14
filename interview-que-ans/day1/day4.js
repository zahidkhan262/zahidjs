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

