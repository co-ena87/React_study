// 순회란? 
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 배열 순회
// let number = [1, 2, 3];

// 객체 순회
// let person= {
//     name: "이정환",
//     age: 27,
//     hobby: "테니스",
// };


// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// ~.length 
// length 프로퍼티는 모든 배열이 다 가지고 있는 기본적인 프로퍼티로서 배열의 길이를 저장하는 프로퍼티이다

for (let i=0; i < arr.length; i++){
    // console.log(arr[i]);
};

let arr2 = [4, 5, 6, 7, 8]; 
for (let i=0; i<arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of 반복문 
// for, of라는 반복문은 오직 배열을 순회하기 위해서만 존재하는 특수한 반복문
// of 뒤에 있는 이 배열의 값을 하나씩 순서대로 꺼내서 변수 item에 저장한다

for (let item of arr){
    // console.log (item);
}

// 1번 2번 성능에는 큰 차이는 없으나 차이점이 존재한다
// 인덱스를 이용하는 방식은 카운터 변수에 인덱스가 저장 되기 때문에 for문 안에서 인덱스를 활용할 수 있다
// of 반복문은 인덱스를 저장하지 않고 그냥 배열 안에 있는 값들을 순서대로 순회만 한다

// 2. 객체 순회
let person = {
    name:"이정환",
    age: 27,
    hobby: "테니스",
};

// 객체의 값들을 순회하려면 세가지 방법이 존재한다

// 2.1 Object.keys 내장함수 사용

// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환한다
let keys = Object.keys(person);

// console.log(keys);

// 객체의 키값들을 배열로 뽑아왔다면 그때부터는 그냥 반목문을 순회하듯이 작성하면 된다
    
    // - for 반복문 사용
    // for (let i=0; i<keys.length; i++) {
    //     console.log(keys[i]);
    // }

    // - 특수한 반복문 for..of 사용
    for (let key of keys){
        const value = person[key]; // 키와 벨류 출력하는 형태
        // console.log(key, value);
    }
    // 키 값과 객체의 벨류 값도 동시에 순회하기 
    // console.log(key, person[key]) -> 괄호표기법


// 2.2 Object.values
    // -> 객체에서 value 값들만 뽑아서 새로운 <배열>로 반환해주는 내장함수
    let values= Object.values(person);
    // console.log(values);

    for ( let value of values) {
        //console.log(values);
    }

// 2.3 for in
for( let key in person){ // person 객체의 "프로퍼티 key"를 순서대로 key라는 변수에 할당한다

    // 키 값과 벨류값 동시에 순회하기
    const value = person[key];
    console.log(key, value);
}

// ‼️ <for of> <for in> 차이점 
    // for of은 배열에만 쓸 수 있다
    // for in은 객체에만 쓸 수 있다