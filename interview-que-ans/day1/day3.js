//find number is prime or not

// const checkNumberIsPrime = (num) => {
//     if (num <= 1) {
//         console.log('1 is composite number');
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// };
// console.log(checkNumberIsPrime(21), "__")


const findPalindrom = (data) => {
    let palindrom = '';
    for (let i = data.length - 1; i >= 0; i--) {
        palindrom += data[i]
    }
    return palindrom === data ? true : false
}
console.log(findPalindrom('121'))


function books1(Arr){
    let x =[];
    Arr.map(element => {
        x= [...x,...element.books]
    });
    return x;
}
 console.log(books1(friends),"second")

const collectBooks = (arr)=>{
    const findBooks = arr.map(ele => ele.books)
    return findBooks.flat()
}

console.log(collectBooks(friends),"first)
