// Truthy & Falsy 이란?
// JS 어떠한 값이 참이거나 거짓이지 않아도 블리언 타입에서의 상황에 따라서 참 이나 거짓으로 판단함

// 예시 코드

if (123) {
  console.log("123 is true"); //참으로 판단
} else {
  console.log("123 is false");
}

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is flase"); // 거짓으로 판단
}

// 이와 값이 어떤 값이 참이나 거짓을 의미하지 않아도 '조건문' 내에서는 참이나 거짓으로 평가하는
// 특징을 특별히 Truthy 그리고 Falsy 라고 한다

// 1. Falsy한 값 7가지 (참 같은 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 0n 이라는 값은 Big Integer라는 특수한 자료형에 해당된다
// 아주 큰 숫자를 저장하는 데에 사용되는 값 웹 개발중에는 잘 이용하지 않는 값 알아만두자

// if(!f1){
//     console.log("falsy");
// } else {
//     console.log("not falsy....")
// }

// if 조건문에 !f1 넣으면 f1 값은 이미 flasy한 값으로써 거짓으로 평가 되기때문에 not(!) 을 만나서 결국 조건식은 참
// -> 콘솔에 "falsy" 출력됨

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
// 조건문에서 다 참으로 평가되는 Truthy 한 값들
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if(!t4) {
//     console.log("flase");
// } else {
//     console.log("Truthy");
// };

// 3. 구체적인 활용 사례

// function printName(person) {
//   console.log(person.name);  객체의 특정 프로퍼티에 접근하는 기능을 가진 함수
// }

// 기대값 -> let person = { name: "이정환"};

// 매개변수로 객체를 받을 거라고 예상했지만 실제로는 undefined 값이 들어오는 경우
// let person; 
// printName(person);


// 실전에서는 객체의 특정 프로퍼티에 접근하는 기능들 담고 있는 함수에서 보통은 조건문으로 person 이라는 매개변수 값이 null 이거나 undefined 가 아닌지 확인하는 코드 작성 해야한다
function printName(person) {
    if(person === undefined){
        console.log("person의 값이 없음")
        return; // return을 사용하여 아래에 있는 person.name 점표기법에 접근하지 못하도록 함수를 종료시킨다
    } 
    console.log(person.name); 
}
// let person;


// person의 값이 null일 경우 또다시 오류 발생 -> 71번 코드줄에서는 'undefined' 인지만 확인 하기 때문이다 

// let person = null;
// printName(person);




// 이런 상황을 방지 하려면 
function printName(person) {
  if (person === undefined || person ===null ) { 
    // OR (||) 연산자 사용하여 NUll 값 대응
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);




// printName 함수처럼 객체 프로퍼티에 접근하는 함수를 여러가지 사용한다면 함수를 만들때 마다 
// 위 예시같은 조건문들을 반복적으로 코드를 작성해야 하기 때문에 효율성이 안좋다 

// Truthy & Falsy 이용하여 조건문 개선하기 (더 간결하게 사용 가능) 

// undefined 와 null 값은 우리가 살펴봤던 대로 이미 '조건문'에서는 Falsy 한 속성이므로 단순하게 Not(!) 사용하기
    // if (person === undefined || person ===null )  -> if (!person) 으로 변경하기 

// let person = { name: "이정환" }; -> 이런 실제 객체값이 들어올 경우에는 Truthy 하기 때문에 조건식이 거짓이 되어서 프로퍼티에 접근 가능함


