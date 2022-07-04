// require 안에 불러올 모듈 경로 (js, json 등 확장자 생략 가능)
const {odd, even} = require('./var');

function checkOddOrEven(num){
    if (num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;