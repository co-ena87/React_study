// 함수선언 -> 함수를 새롭게 만드는 행위
// 함수 호출했을 때만 함수가 실행된다

// 함수가 호출되면 프로그램의 실행 순서가 함수 내부로 넘어간다

// function greeting () {
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

// 함수 실행 흐름
// function greeting 함수 선언 -> 콘솔출력 (함수 호출전) ->  greeting 함수 내부로 이동("안녕하세요") ->  콘솔출력 (함수 호출 후) -> 종료

// 함수 - 직사각형의 넓이 구하기

// function getArea(width, height) {
//    let width = 10;
//    let height = 20;
//    let area = width * height;

//   console.log(area);
// }
// getArea(10, 20);

// 추가로 수정할 부분으로  width, height 고정값으로 정해져 있다
// getArea() 함수가 호출될때마다 내가 직접 넘겨준 값을 통해 넓이를 구하도록 동적으로 수정하기

// getArea(10, 20) -> 함수를 호출하면서 함수에게 전달한 값들을 각각 인수라고 한다 -> 10, 20
// 전달된 인수들을 순서대로 저장하는 특수한 함수의 변수들을 매개 변수라고 한다 -> width, height

// return area 사용 해보기

// function getArea(width, height) {
//   // 참고 JS에서는 함수 안에 또 다른 함수 선언 가능 -> 중첩함수
//   function another() {
//     console.log("another");
//   }
//   another();

//   let area = width * height;

//   //return 문을 만나게 되면 함수가 값을 반환하고 바로 종료된다
//   return area;

//   // return문 밑에 코드를 작성해도 실행 되지않는다
//   console.log("안녕하세요");
// }

// let area1 = getArea(10, 20);
// console.log(area1);

// let area2 = getArea(30, 20);
// console.log(area2);

// getArea(120, 200);

// 함수 안에서 return 키워드가 사용될경우 함수는 return 이후에 값인 area를 반환하게 된다
// area를 반환값이라고 부르며 반환 값은 곧 함수의 결과 값이 된다
// 반환 값을 변수에 담아서 활용할 수 있다





// JS는 getArea라는 함수의 선언을 함수의 호출보다 아래에 두어도 실행하는데 문제가 없다
// 가능한 이유는 호이스팅 기능 때문에 가능하다
// 호이스팅 -> 우리말로 끌어올리다 라는 뜻을 가지고 있다


let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);


// 호출문
function getArea(width, height) {
    function another() {
    console.log("another");
    }
    
    another();

let area = width * height;
return area;

console.log("안녕하세요");

}