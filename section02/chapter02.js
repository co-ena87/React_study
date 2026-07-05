// 단락 평가
// 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지 할 수 있는 기능

// && and 연산
function returnFalse() {
  console.log("Fasle 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}
// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());


// || or 연산
function returnFalse() {
  console.log("Fasle 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}
// console.log(returnTrue() || returnFalse());


// Truthy Falsy 값
function returnFalse() {
  console.log("Fasle 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}
// console.log(returnFalse() &&  returnTrue());


// 단락 평가 활용 사례

function printName(person) {

    // 오류방지 코드 
        // if(!person){
        //     console.log("person에 값이 없음")
        //     return;
        // }
    // 이 코드를 삭제 가능하고 person &&로 수정할 수 있다
    

    console.log(person && person.name);
    // 만약 person 매개변수의 값이 현재 undefined 이라면 falsy한 값이기 때문에 단락 평가에 의해 
    // person.name 에 접근 자체를 하지않는다 그러므로 undefined 값에 의해 flase 판단

}


printName();
// person 값으로 아무것도 전달하지 않아도 오류 발생을 막는다


// 버전 2 (단락평가 추가로 더 이용)
function printName(person) {
    const name = person && person.name;
    console.log( name || "person의 값이 없음");
}

printName();
printName({name : "이정환"}); // 객체값을 정상적으로 인수로 전달