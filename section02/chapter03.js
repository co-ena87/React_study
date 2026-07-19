// 구조 분해 할당
// 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 이전에 배운 방식으로 변수에 일일이 다 할당 하는 방법
// let one =  arr[0];
// let two =  arr[1];
// let three =  arr[2];

// 구조 분해 할당 사용

//let [one, two, three] = arr; // arr 배열에 있는 원소들이 각각 순서대로 1 -> one 2 -> two 3 -> three 할당된다


// 변수 지우기 -> three 변수 단순삭제

// let [one, two] = arr;
// console.log(one, two) // 첫번째 두번째 원소만 one ,two 라는 변수에 할당된다

// 배열의 원소 갯수 뛰어넘기 
// let [one, two, three, four] = arr;
// console.log(one, two);

// four라는 변수를 추가 선언한다고 하더라도 저장에 오류가 생기는건 아니다 다만 변수에 저장된 값을 출력시 초기화가 되지 않는 변수처럼 undefined 저장된다

// four 라는 변수에 특별히 ' =4 해서 ' 혹시나 값이 모자랄 상황을 대비해서 기본값을 설정하는 것 가능하다
// let [one, two, three, four = 4] = arr;
// console.log(one, two , three ,four);

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// person 이라는 객체가 있고 객체 안에 각각 프로퍼티를 변수에 할당하려고 한다
// let name = person.name
// let age = person.age;
// let hobby = person.hobby;

// 구조 분해 할당을 이용한 변수 할당
// 객체는 중괄호!

// 각각의 객체 프로퍼티를 키 값을 기준으로 변수에 저장 할 수 있다
// let {name, age, hobby} = person;
// console.log(name, age, hobby);

// 배열과 같은 방식으로 객체에도 존재하지 않는 프로퍼티를 구조 분해 할당으로 받으려고 하면 -> undefined 
// 추가로 기본값을 설정하는 것 또한 extra = "hello" 로 배열의 구조 분해 할당과 동일하게 이루어진다


// 객체 구조 분해 할당에서는 특별하게 추가로 할당받는 변수의 이름을 변경할 수 있다
let {
    age : myAage,
    hobby,
    name,
    extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수 받기
const func = ({name, age, hobby, extra }) =>{
    console.log(name, age, hobby, extra);

};

func(person);

// 주의점 
// 객체를 넘겼을 때만 중괄호와 함께 구조분해 할당을 받을 수 있다