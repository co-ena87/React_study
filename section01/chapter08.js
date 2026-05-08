// null 병합 연산자
// -> 존재하는 값을 추려내는 기능 
// -> null , undefined 가 아닌 값을 찾아내는 연산자 

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// 결과 ) var1은 초기화 하지 않았기 때문에 undefined var2는 10 값이 존재하므로
// null 변환 연산자가 var4 에 10을 저장한다

let var5 = var1 ?? var3;
// 결과 ) 20

let var6 = var2 ?? var3;
// null 병합 연산자에 참여하는 이 두개의 피연산자가 둘 다 null , undefined 이 아닐경우
// 가장 처음 적힌 값이 출력된다 

// 실제 null 병합 연산자 사용 예시

// 회원가입 경우

let userName;
let userNickName = "winterlood";
let displayName = userName ?? userNickName;
console.log(displayName);

// displayName에 userName이라는 변수 값이 존재한다면 이 유저 네임을 displayName에 저장하고 
// 만약 userName이 undefined 이라면 그때에는 유저 닉네임으로 저장한다   

// 2. typeof 연산자 
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
let t1 = typeof var7;
console.log(t1);

// 변수를 선언하면서 숫자값으로 초기화 하였더라도 해당 변수에 다른 타입으로 저장 가능하다
// 변수의 값이 고정이 되지않고 코드 실행에 따라서 값의 타입이 동적으로 자주 바뀐다
// 현재 변수에 저장된 값의 타입을 알고싶다면 typeof 연산자를 사용한다


// 3. 삼항 연산자 
// 말뜻 그대로 항 3개를 사용하는 연산자
// 조건식을 이용해서 참이나 거짓일 때의 값을 다르게 반환한다

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝" , 홀수 -> "홀" 저장하라

let res = var8 % 2 === 0 ? "짝수" : "홀수";