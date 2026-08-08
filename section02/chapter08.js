// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// forEach 메서드가 이 배열의 요소들을 반복문처럼 순회하면서 콜백 함수를 호출하고 매개 변수로 
// 현재 요소의 값과(item) 현재 반복 카운트와(idx) 전체 배열의 값을(arr) 전달한다
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item *2 );
}); 


// 빈 배열 만들어 forEach 메서드를 이용해서 arr의 모든 값에 *2를 해서 빈 배열에 넣기
let doubledArr = [];

arr1.forEach((item)=> {
    doubledArr.push(item *2);
});

// console.log(doubledArr);

// 2. inlcudes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 배열에 3 이라는 값이 있는지 찾아서 결과를 출력한다 

console.log(isInclude); // true 값 출력됨

// let isInclude = arr2.includes(10); // 배열에 존재하지 않는 10의 값을 찾으려고 하면 false가 된다

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// let arr3 = [1, 2, 3]; - >  2라는 값이 현재 index에 1번에 있다고 해서 1 출력된다

// 배열의 찾으려는 값이 여러개 존재할경우 
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);

// let index = arr3.indexOf(20); 처럼 존재하지 않는 20의 값을 찾으면 존재 하지 않는다는 의미로 -1 반환한다

// console.log(index);
// indexOf는  배열의 맨 앞부터 탐색을 시작하기 때문에 가장 첫 번째로 찾아낸 요소의 인덱스를 반환한다 -> 0 출력된다

// 4. findIndex
// 모든 요소를 "순회"하면서, "콜백함수를 만족하는" 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 콜백함수를 만족한다 라는 의미는 콜백 함수가 참을 반환한다는 의미이다
let arr4 = [1, 2, 3];

// const findedIndex= arr4.findIndex((item)=>{
//     if(item === 2) return true;
// })

// 조건문 바꾸기
// const findedIndex= arr4.findIndex((item)=>{
//     if(item % 2 !==0) return true;
// })

// 함수 간결하게 만들기 
// const findedIndex = arr4.findIndex(
//     (item) => item % 2 !== 0
// );


// 조건을 만족하는 요소가 배열에 존재하지 않는경우 
// const findedIndex = arr4.findIndex(
//     (item) => item === 999
// );   // -> -1 반환

    
    
// 특정 조건을 만족하는 요소의 "위치"를 탐색할때 굳이 findIndex 쓰는 이유는?
// indexOf 메소드는 원시 타입 값이 들어 있을때가 아니라 객체 타입의 값들이 저장된 배열에서는 정확한 요소의 위치를 찾을 수 없다

// let objectArr = [
//     {name : "이정환"},
//     {name : "홍길동"},
    
// ];

// indexof 메소드 사용시 -> 간단한 원시타입
// console.log(
//     objectArr.indexOf({name: "이정환"})
// );  -> -1 반환 못찾음 indexOf는 얕은 비교로 동작하기 때문이다




// findIndex 사용시 -> 복잡한 객체타입
// console.log(
// objectArr.findIndex(
//     (item)=> item.name === "이정환"
// )
// );

// 아이템의 네임이라는 "프로퍼티의 값"을 기준으로 비교를 하기 때문에
//  0 출력으로 정확힌 위치를 찾을 수 있다
// 콜백함수 이용


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾지만 "요소 그대로" 반환한다

let arr5 = [
    {name:"이정환"},
    {name:"홍길동"},
];

const finded = arr5.find((item)=> item.name === "이정환");
console.log(finded);