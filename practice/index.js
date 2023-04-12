const nums = [12, 1, 33, 43, 3, 2, 6, 55, 2, 5, 6, 7, 0];
const regex = /(\d+\.)?\s*(\n\n|\n)/;
replace(/^\d+\.\s*/, '');

const findLargestNumber = (arr) => {
    const largestNumber = arr.reduce((prev, curr) => {
        if (prev < curr) {
            prev = curr
        }
        return prev
    }, 0)
    return largestNumber
}
console.log(findLargestNumber(nums));

        // const response = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         { role: 'system', content: prompt },
        //         { role: 'assistant', content: 'Assistant: ' }
        //     ],
        //     temperature: 0.7,
        //     max_tokens: 3097,
        // });
        // return response.data.choices[0].messages;

const addAllArrayNumber = (arr) => {
    const addAll = arr.reduce((prev, curr) => {
        prev += curr
        return prev
    }, 0)
    return addAll
}
console.log(addAllArrayNumber(nums))


// next
const numbers = [1, 4, '1', '2', 4, 6, 6, 'a', 6, undefined, NaN];

const addUniqueNumber = (num) => {
    const numbers = num.map(Number).filter(ele => !Number.isNaN(ele))
    const unique = [...new Set(numbers)]
    console.log(unique, "unique")

}
console.log(addUniqueNumber(numbers))

const strs = 'aabbcccabaabbcddbd'

const findOccurance = (str) => {

    const countHash = {};

    for (let i = 0; i < str.length; i++) {
        countHash[str[i]] = (countHash[str[i]] || 0) + 1
    }
    return countHash


}
console.log(findOccurance(strs))

const obj1 = {};

obj1.name = 'zahid';

obj1.name = 'suboor'
const a = 'age';

obj1[a] = 24;

console.log(obj1, "obj1");


const obj2 = {};
const name = 'aabbcccabaabbcddbd'

for (let x = 0; x < name.length; x++) {
    const alphabet = name[x];
    // obj2[alphabet] = alphabet
    if (obj2[alphabet] != undefined) {
        obj2[alphabet] = obj2[alphabet] + 1
    } else {
        obj2[alphabet] = 1
    }

}
console.log(obj2, "obj2");


let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

const findDuplicateValue = (arr) => {
    const hash = {}

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = arr[i]
        console.log(hash, "zahid")
    }
    return Object.values(hash)

}
console.log(findDuplicateValue(data))


let num = [1, 3, 7, 5, 6, 2];
let n = num.length;

function findMissing(arr, len) {
    let newArr = arr.sort((a, b) => a - b)
    console.log(newArr, "new")

    for (let i = 0; i < n; i++) {
        if (newArr[i] - newArr[i + 1] !== -1) {
            let data = newArr[i] + 1
            console.log(data, "data")
        }
    }
}
findMissing(num, n)

// sort the string of array and mixup with number
const myArray = ['apple', '2-banana', 'cherry', '1- date'];

// sort the array based on the numeric values
myArray.sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/), 10);
    const bNum = parseInt(b.match(/\d+/), 10);

    if (isNaN(aNum)) {
        return -1; // put non-numeric values before numeric values
    }
    if (isNaN(bNum)) {
        return 1; // put non-numeric values before numeric values
    }
    return aNum - bNum; // sort based on numeric value
});

console.log(myArray); // output: ['1- date', '2-banana', 'apple', 'cherry']


// highr order functio


function test(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}
const numb = [1, 2, 3, 4, 5];
const double = (x) => x * 2;
const doubledNumbers = test(numb, double);
console.log(doubledNumbers);

// palindrom number


function isPalindrome(num) {
  // Convert the number to a string
  let str = num.toString();
  // Loop through the string from both ends, comparing characters
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      // If the characters don't match, it's not a palindrome
      return false;
    }
  }
  // If we've made it this far, it's a palindrome
  return true;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

//closure
In JavaScript, closure is a mechanism that allows a function to access variables from its lexical scope even after the function has finished executing.

// When a function is defined inside another function, 
// the inner function can access the outer function's variables,
// even if the outer function has already returned.
// This is possible because the inner function has created 
// a closure over the variables in the outer function's scope.

let a = 20;
function out(){
    let b=30;
    function inner(){
        console.log(a,b)
    }
    return inner
}
const xyz=out()
xyz()

import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { Button, Col, Container } from 'react-bootstrap'
import openai from 'openai';

const ChatGpt = () => {
    const [q, setQ] = useState('')
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    const [prompt, setPrompt] = useState('');

    const API_KEY_OPEN_AI = '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';

    const str = `1- React js is.
    2- which is used for make user.
    3-It is used virtual dom instead of real dom because virtual dom is faster than real dom.`

    const newStr = str.split('\n')
    // console.log(newStr, "newStr")



    const configuration = new Configuration({
        apiKey: API_KEY_OPEN_AI,
    });


    const openai = new OpenAIApi(configuration);

    async function getResponse(prompt) {
        // const response = await openai.createCompletion({
        //     model: 'text-davinci-003',
        //     prompt,
        //     max_tokens: 3940,
        //     temperature: 1,
        //     frequency_penalty: 0.5,
        //     presence_penalty: 0.9,
        //     top_p: 0.8
        // });
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'system', content: prompt },
                { role: 'assistant', content: 'Assistant: ' }
            ],
            temperature: 0.7,
            max_tokens: 3097,
        });
        return response.data.choices[0].message?.content;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const regex = /(\d+\.)?\s*(\n\n|\n)/;
        const getRes = await getResponse(q)
        const originalStr = getRes.split(regex)
        console.log(getRes, "gett ")
        setResponse(originalStr)
    }


    console.log(response, "response");

    return (
        <Container>
            <div className="input-field">
                <input type="text" placeholder='Search here...' value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <Button onClick={handleSubmit}>Search</Button>
            <Col>
                <div className="cards p-3 text-white-50">
                    {
                        response && response?.map((ele, id) => {
                            return (
                                <p key={id}>{ele}</p>
                            )
                        })
                    }
                </div>
            </Col>
        </Container>

    )
}

export default ChatGpt
