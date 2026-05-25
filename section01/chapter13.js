// 콜백 함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수

// function main(value) {
// // value 매개변수 존재
//     value();
// }

// function sub() {
//  sub 함수는 매개변수 없고 대신 콘솔에 sub라는 문자열을 출력함
//     console.log("sub");
// }

//main(sub); -> main 함수를 호출하면서 인수로는 sub라는 값을 전달함


// sub라는 함수를 값으로 main 함수의 인수로 전달함 -> 콘솔 확인해보면 sub 출력됨
// main 함수의 value라는 매개변수에는 sub라는 함수가 저장되어 있다 ->
// value매개변수에저장된 함수를 main 함수안에서 호출할 수 있다 

// 결론) sub 함수처럼 main이라는 다른 함수에 인수로써 전달된 함수는 '콜백함수' 라고 한다.



// 예제

// function main (value) {
// // mian 함수에서는 전달된 콜백 함수를 원하는 타이밍에 실행 할 수 있다
//     console.log(1);
//     console.log(2);

// // value 매개변수에는 sub 함수가 담겨있음으로 value() 으로도 호출가능
//     value();

// // 함수가 끝나자마자 코드 실행하도록 작성
//     console.log("end");
//  }

// function sub() {
     // console.log("i am sub");
// } 
// JS 에서는 이런 함수도 문자열이나 숫자와 같은 값으로 취급함 -> 함수 자체를 다른 함수의 인수로써 사용가능

// main(sub); // 콘솔 결과 -> ƒ sub() {console.log("i am sub");} 콘솔에 sub 함수 그 자체가 출력됨 = 함수 자체로도 값 이기 때문에

// 콜백함수란 프로그래밍에서는 뒷전에 실행되는 또는 나중에 실행되는 의미를 가지고 있다
// 그러므로 sub 함수는 지금 당장 실행되는 게 아니라 main 이라는 함수에 인수로 전달 되어서 나중에 main 함수가 알아서 실행하게 된다


// 함수 표현식으로 작성시 
// 익명 함수도 사용가능 'sub' 생략

// main(function sub(){
//     console.log("i am sub");
// });

// 화살표 함수 
// 화살표 함수가 mian 함수의 콜백 함수로써 인수로 전달함

// main(() => {
//   console.log("i am sub");
// });


// 콜백함수 사용 예시

// function repeat(count) {
//     for(let idx =1; idx<=count; idx++) {
//         console.log(idx)
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//   }
// }

// repeat(5);
// repeatDouble(5);



// 구조가 거의 비슷한 코드 중복 작성하게 됨 -> 콜백함수 이용하여 반복코드를 줄인다
// 화살표 함수로 바꿔서 더 간결하게 작성 가능

function repeat(count, callback) {
    for(let idx =1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function(idx) {
    console.log(idx);
});


// *2 하는 반복 코드 작성하려고 한다면 
repeat(5, function (idx) {
  console.log(idx *2);
});