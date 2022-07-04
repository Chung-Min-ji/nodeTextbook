const {odd, even} = require('./var');

// 모듈로부터 값 불러올 때 변수 이름 다르게 지정 가능
// func.js의 checkOddOrEven -> checkNumber
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));