console.log(this);
console.log(this === module.exports);
console.log(this === exports);

// 최상위 스코프의 this는 module.exports (or exports)
// 함수 선언문 내부의 this === global
function whatIsThis(){
    console.log('function', this === exports, this === global);
}
whatIsThis();
