/* 
<h3>Write a function which checks given input/parameter:</h3>  
  <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
  <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
  <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
*/



function checkOddEven(arg) {
    if (arg % 2 === 0) return console.log(arg, 'number is Even')
    else return console.log(arg, 'number is Odd')
}
console.log(checkOddEven(1629))