// 1. 묵시적 형 변환 ( 자바스크립트 엔진이 알아서 형 변환 하는것 )

let num = 10;
let str = "20";

const result = num + str;

// + 가 실행되면서 num 변수가 number -> string 으로 묵시적으로 형 변환한다
// 모든 불가능한 연산에서 이런 묵시적 형 변환이 무조건 발생 되는것은 아니다
// 예시 처럼 특정 하나의 변수 값 num 이라는 변수 하나의 값만 형 변환 했을때 
// 오류가 발생하지 않고 연산을 종료 시킬 수 있는 경우에만
// 묵시적 형 변환이 발생한다


//2. 명시적 형 변환 ( 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 하는것)
// 문자열 -> 숫자로 변환하고자 한다.
// Number 라는 내장함수 사용함
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2);

//문자열 안에 숫자외 다른 문자열 값이 포함되는 경우 방금과 같은 방식으로는 변환이 안된다
// console.log 결과로 NaN 출력됨
// 이를 해결하기 위해서 다른 내장함수 parseInt(str2) 를 사용하여 해결한다
// 변수 str2 처럼 숫자값이 아닌 다른 값을 포함하고 있는 문자열도 숫자 값으로 변환해준다

//주의사항
// let str2 = "asdfasdf10개" 문자가 앞에 있게되면 형 변환이 안되는 경우도 발생한다
//그러므로 parseint 내장함수를 사용하더라도 숫자가 앞 쪽으로 나오도록 해야한다





// 3. 숫자에서 문자열로 형 변환하기
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");