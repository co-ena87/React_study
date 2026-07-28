// math 모듈

// math.js 는 간단한 계산 기능을 하는 코드들을 모아둔 math모듈이라고 한다


// 덧셈
// function add(a,b){
//     return a + b;
// }

//뺄셈
// function sub(a,b){
//     return a - b;
// }

// 모듈 시스템을 이용해서 math 모듈에 작성한 add sub 함수를 바깥으로 내보내서 index.js 인덱스 라고 부를 수 있는 다른 모듈에서(index.js에서 불러와 사용해보기) 불러와 사용할 수 있도록 코드를 작성 해본다 

// commonJS 즉 , common.js 라는 모듈 사용 


// 모듈이라는 내장 객체에 exports라는 프로퍼티의 값으로 객체를 저장한다
// -> 이 객체 안에서 각각 프로퍼티로 내보내고 싶은 값들을 넣어준다 

// module.exports = {
//     add : add,
//     sub : sub,
// }

// math 모듈로부터 add와 sub라는 두개의 함수를 내보낼 계획임으로 
// 먼저 add라는 프로퍼티의 value로 내보낼 값 add 함수 그리고 sub 프로퍼티의 value로
// 내보낼 값인 sub 함수를 내보낸다 

// 참고로 value 값으로 사용되는 변수의 이름과 키 값이 똑같을 경우에는 아래 방법으로
// 함수의 이름만 명시해도 알아서 이 키는 이 변수의 이름인 add , 값은 add라는 변수에 저장된 함수(function add) 들어가게 된다
// * sub 도 마찬가지

// module.exports = {
//    add,
//    sub,
// };

// 최종 CommonJS 모듈 시스템에 의해서 이 두개의 값이 math.js 모듈로부터 내보내진다

// 내보내진 값들은 다른 index.js 같은 모듈에서 내장 함수 'require'을 이용하여 받을 모듈 경로를 인수로 전달하면서 불러와서 사용 한다 
// -> require("./math");

// require("./math"); 코드를 작성하면 require 함수가 현재 경로의 math 모듈로부터 객체 형태로 내보내진 값을 그대로 반환해준다

// commonJS 보다 훨씬 최신식으로 동작하며 React에서 사용하게 되는 ES모듈 시스템
// ES 모듈 시스템을 사용하려면 패키지 내부에 앞으로 ES모듈 시스템 사용 하겠다는 설정이 필요함



// ES 모듈 시스템에서는 모듈로부터 어떠한 값을 내보낼때 export 키워드 뒤에 객체를 리터럴로 생성하고 그 안에 내보내고 싶은 값들을 담아주면 된다

// ES 모듈로 내보내기 3가지

// 1. export {add , sub}; 

// 2. export 함수앞에 붙이기

export function add(a, b) {
  return a + b;
};


export function sub(a, b) {
  return a - b;
};

// 3. 하나의 모듈을 대표하는 디폴트 값을 내보내기
// export default 사용하기

export default function multiply(a,b){
    return a * b;
};

// default 라고 내보내면 multiply라는 함수는 'defalult' 로써 내보내져서 이제 math 모듈을 '대표' 하는 단 하나의 기본 값이 된다


