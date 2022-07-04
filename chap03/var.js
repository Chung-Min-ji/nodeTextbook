const odd = '홀수입니다';
const even = '짝수입니다';

//  module.export 에 변수들을 담은 객체를 대입 -> 모듈로서 작동함 (변수를 모아놓은 모듈)
// 다른 파일에서 이 파일을 불러오면 module.exports 에 대입된 값 사용 가능
module.exports ={
    odd,
    even,
};

//-- 위 코드는 아래와 같이 바꿀 수 있음
// module.exports === exports 같은 객체 참조하기 때문.
// exports 에는 반드시 객체처럼 속성명과 속성값 대입 (다른 값 대입하면 객체 참조관계 끊겨 더이상 모듈로 기능 X)
// module.exports 에 함수를 대입한 경우는 exports 로 바꿀 수 없음
// 한 모듈에 exports 와 module.exports 를 동시에 사용하는것은 지양 (같은 객체를 참조하고 있으므로)
exports.odd = '홀수입니다';
exports.even = '짝수입니다';