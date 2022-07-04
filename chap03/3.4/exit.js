 // process.exit() 은 강제로 노드 프로세스 종료.
 // 서버 환경에서는 서버가 멈추므로 잘 사용하지 않음
 // 서버 외의 독립적인 프로그램에서는 수동으로 노드 멈추기 위해 사용

let i = 1;
 setInterval(() => {
  if (i === 5) {
   console.log('종료!');
   process.exit();
  }
  console.log(i);
  i += 1;
 }, 1000);