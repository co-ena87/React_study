
function funcA (){
    // console.log("funcA");
};

// funcA() 함수 호출이 아니라 변수 varA 담아둠
let varA = funcA;
varA();

// 1. 함수 표현식 
// ⚠️ 함수 표현식으로 만든 함수들은 '값'으로 취급되기에 호이스팅 불가

// JS 특징을 이용하면 함수를 굳이 선언하지 않고도 변수에 담듯이 함수를 만들 수 있다
// 함수를 만들자마자 바로 변수에 담는것 

let varB = function funcB(){
    // console.log("funcB");
};

varB(); 

// 주의사항
// funcB 경우 함수 선언식은 아니다 
// ⚠️ '선언식' 이라는건 funcA 처럼 어떤 변수의 값으로 담기지 않은 상태로 유지가      되어야한다


// <아무런 변수의 값으로 담기지 않은 상태>
// function funcA (){
//  console.log("funcA");
// }
// 함수 호출시 varA() , funcA() 호출 가능 



// <반면 varB 는 값으로써 함수가 생성된것> 
// let varB = function funcB() {
//   console.log("funcB");
// };

// ‼️  funcB 함수의 이름으로는 호출 불가 
// ‼️  반드시 varB()으로 호출해야 함 funcB() 로 호출시 에러발생

// 그래서 let varB = function funcB() 경우 생성할때 function 이름(funcB) 생략함
// let varB = function() -> 이처럼 이름을 생략한 경우 '익명함수' 라고 한다


// 함수 표현식으로 함수 생성
// let varC = function (){
//     return 1;
// }

// 2. 화살표 함수

// let varC = () => {  
//  function 생략
//     return 1;
// }


// 단순히 값을 리턴할 경우에 중괄호, return 문도 생략가능  
// varC = () =>  1;


// 매개변수 필요시 
// let varC = (value) => value + 1;



// 화살표 함수가 어떤 값을 바로 즉시 반환하는게 아니라 추가적인 작업이 필요한 경우
// 마지막에 return문 추가해서 반환하게 한다
let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varC(10));