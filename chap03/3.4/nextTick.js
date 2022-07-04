// process.nextTick, promise.resolve 는 다른 콜백함수보다 먼저 실행됨.
// 다른 콜백함수들이 Task Queue 에 저장될 때, 이 둘은 MicroTask Queue 에 저장.

setImmediate(()=>{
    console.log('immediate');
});
process.nextTick(()=>{
    console.log('nextTick');
});
setTimeout(()=>{
    console.log('timeout');
}, 0);
Promise.resolve().then(()=> console.log('promise'));
