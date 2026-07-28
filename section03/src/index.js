// const moduleData = require("./math"); (commonJS 모듈을 사용한 호출)

// npm run start 실행 후 moduleData 라는 변수에는 { add: [Function: add], sub: [Function: sub] } 이라는 객체가 저장된 상태

// moduleData.add() 이런식으로 함수 호출한다

// const {add, sub} = require("./math");

// CommonJS 모듈 시스템을 활용하는 require를 사용하여 npm run start 가동시키면 오류 발생한다 
// -> ES모듈 모듈 시스템과 CommonJS 모듈 시스템은 기본적으로 함께 사용하지 못한다
// package.json에서 "type": "module" 작성하고 ES 모듈 시스템 사용하겠다고 설정 했기 때문이다

// ES모듈 시스템으로 값을 가져오기
// ⚠️ ES모듈 사용시 반드시 모듈의 확장자까지 명시 해줘야 한다
import {add ,sub} from "./math.js"

// default multiply 처럼 기본 값으로 내보내진 multiply 같은 함수는 다른 모듈에서 
// import{} 중괄호 사용해서 작성하는것이 아니라 새로운 임포트문을 작성한다

// import multiply from "./math.js";
// 중괄호{} 없이 불러오는것이 포인트

// 특별히 이러한 기본값(default)은 불러올때 이름을 마음대로 작성해서 불러올 수 있다 
// ex. multiply -> mul
import mul from "./math.js";

// 마지막으로 동일한 경로로부터 값을 불러오는 여러개의 임포트문은 합치기 가능하다
// import mul from "./math.js";
// import {add ,sub} from "./math.js"

  // -> import mul, {add ,sub} from "./math.js" 깔끔하게 정리 가능



// 함수 호출의 결과를 console.log로 출력
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(2,3));
