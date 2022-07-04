const dep1 = require('./dep1');
const dep2 = require('./dep2');
dep1();
dep2();

// 순환참조 발생할 경우, 순환 참조되는 대상을 빈 객체({})로 변경시킴
// 에러 발생하지 않고 빈 객체로 변경되므로 예기치 못한 동작 발생할 수 있음