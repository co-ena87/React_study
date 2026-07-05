const moduleData = require("./math");
// npm run start 실행 후 moduleData 라는 변수에는 { add: [Function: add], sub: [Function: sub] } 이라는 객체가 저장된 상태


// moduleData.add() 이런식으로 함수 호출한다

// 함수 호출의 결과를 console.log로 출력
console.log(moduleData.add(1,2));
console.log(moduleData.sub(1,2));

