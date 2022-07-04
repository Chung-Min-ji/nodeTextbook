console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요';

require('./var');

console.log('require.cache 입니다.');
console.log(require.cache);
console.log('require.main 입니다.'); // 노드 실행시 첫 모듈
console.log(require.main === module); // true 이면 현재 파일이 첫 모듈
console.log(require.main.filename); // 첫 모듈 이름 확인
