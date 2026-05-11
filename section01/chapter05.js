//1. Number Type
let num1 = 27;
let num2 = 1.5;
let nam3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); 
// 나머지 구하는 연산 -> 모듈러 연산 이라고한다.

// 양의 무한대
let inf = Infinity;

//음의 무한대
let mInf = -Infinity;

// 수치연산 실패 했을때의 결과 값으로 사용한다
//Not a number 의미
let nan = NaN;

// NaN  실행 예시 (연산불가능)
// console.log(1* "hello");


//2. String Type
// 문자열을 만들때 반드시 "" 붙어야 한다  문자열은 ""없으면 변수 선언으로 인식한다

//문자열 연산 
let myName = "이정환";
let myLocation = "목동";
let introduce =  myName + myLocation;

//백틱
//탬플릿 리터럴 문법 
//let introduceText = `${myName}`
// 백틱은 `${변수명}` 형태로 문자열 안에 변수에 값을 동적으로 넣는게 가능하다
// 백틱을 이용하여 문자열을 만들면 $사인과 {} 통해서 변수의 값을 동적으로 문자열에 포함시킬 수 있다
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

// 3. Boolean Type
// true 이거나 false만을 저장하는 타입
// 어떠한 상태를 의미한다 
let isSwitchOn = true;
let isEmpty = false; 

// 4. Null Type(아무것도 없다)
// empty 변수에 아무런 값도 담겨있지 않다. 
let empty = null;


// 5. Undefined Type
// Undefined 단 하나의 값만 포함하는 특수한 타입이다.
// 변수를 선언하고 그 변수에 어떠한 값도 집어넣지 않았을때 자동으로 할당하는 값
let none;
console.log(none);


// Null VS Undefined Type

// Undefined 값은 변수를 선언하고 아무런 값도 할당하지 않았을때 JS 자체 내에서 자동으로 넣는다
// 변수를 초기화 하지 못했거나 존재하지 않는 어떤 값을 불러오려고 할 때 발생할 수 있는 값

// null 값은 직접 개발자가 명시적으로 할당한 값
// const [user, setUser] = useState(null);
// null로 시작한 이유는 아직 서버에서 사용자 데이터를 안 받아왔기 때문이다
