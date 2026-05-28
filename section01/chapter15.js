// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {} // 객체 리터럴 ( 대부분 사용하는 방식)

// 2. 객체  프로퍼티 (속성)
// 객체 프로퍼티 -> 객체의 정보 값 

let person = {
    name:"이정환",
    age:27,
    hobby: "테니스",
    extra :{},
};

//  let person = {
    //  name:"이정환",
    //  key : value
    
    //  age:27,
    //  key : value
    
    //  hobby: "테니스",
    //  key : value
    
    // 10 : 20,
// };


// 객체 프로퍼티들은 key의 이름에 따라 불리게 된다
// 객체 프로퍼티의 개수 제한 없음, value에 들어올 수 있는 자료형 타입 제한 없음 
// (함수, 블리언타입 ,객체 모두 가능)
// 키 값으로는 문자열이나 숫자만 가능하다

// 객체 프로퍼티의 키로 사용되는 문자열은 따옴표 붙이지 않지만 
// 예외적으로 like cat 같은 띄어쓰기가 포함된 문자열을 키로 사용 하려면 
// ""으로 감싸줘야한다 -> "like cat"



// 3. 객체 프로퍼티를 다루는 방법
// - 3.1 특정 프로퍼티에 접근법 (점 표기법, 괄호 표기법)

// < 점 표기법 >
let name = person.name;
// console.log(name);

// let name = person.name2;
// console.log(name); -> 콘솔 undefined





// < 괄호 표기법>
let age = person["age"];
// ["age"] 쌍따옴표 없이 사용 하면 age가 변수로 인식하여 오류가 발생된다
// 괄호 표기법 또한 존재 하지않는 프로퍼티에 접근 하면 undefined 반환한다

console.log(age);


// 괄호 표기법은 접근 하고자하는 프로퍼티의 키를 문자열로 명시 가능하다
// 괄호 표기법에서는 변수에 접근 하고자 하는 키 값을 담아 프로퍼티를 꺼내올 수 있다 

let property = "hobby"; // property 라는 변수 만듬
let hobby = person[property]; // person 객체에서 변수 property 값인 "hobby" 가져온다
console.log(hobby);


// 동적으로 변화 시키면서 꺼내와야 할 때는 괄호 표기법을 이용하는게 좋다
// 그게 아니면 문법이 훨씬 간결한 점 표기법을 이용하기 편리하다



// 3. 객체 프로퍼티를 다루는 방법
//  - 3.2 새로운 프로퍼티를 추가하는 방법

// <점 표기법>
person.job = "food killer"; 

// <괄호 표기법>
person["favoriteFood"] = "엽떡";
console.log(person);


// 3. 객체 프로퍼티를 다루는 방법
//  - 3.3 프로퍼티를 수정하는 방법

// < 점표기 법>
person.job = "educator";

// < 괄호 표기법>
person['favoriteFood'] ="쌀국수";



// 3. 객체 프로퍼티를 다루는 방법
//  - 3.4 프로퍼티를 삭제하는 방법
// delete 연산자 사용 -> delete 삭제하고자 하는 프로퍼티

// < 점표기 법>
delete person.job;

// < 괄호 표기법>
delete person["favoriteFood"];
console.log(person);


// 3. 객체 프로퍼티를 다루는 방법
//  - 3.5 프로퍼티의 존재 유무 확인하는 방법
// in 이라는 독특한 연산자 사용한다

// name 이라는 키가 'person' 객체에 있나 없나 
// 존재하면 true 존재하지 않으면 false 반환

let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); 
console.log(result2);