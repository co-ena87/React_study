// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// animal = {a: 1}; -> 아예 새로운 값을 할당 해서 에러 발생 왜냐면 const 상수 임으로

// 상수 객체 프로퍼티 추가 / 수정 / 삭제
// 이미 저장되어있는 객체 값의 프로퍼티를 수정하는건 가능

animal.age = 2;
animal.name = "까망이";
delete animal.color;

// 2. 메서드
// 값이 함수인 프로퍼티를 말함
// 메서드는 익명함수 , 화살표 함수 더 단축된 형태로도 만들 수 있다

const person = {
  name: "이정환", // 객체의 정보

  // 메서드 선언 
  sayHi() {
    //메서드는 보통 객체의 동작을 정의하는데 사용된다
    console.log("안녕");
  },
};

// 메서드는 함수 임으로 호출하는 것 가능하다 
person.sayHi();
person["sayHi"] (); // 괄호 표기법 호출 

