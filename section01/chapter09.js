// 1. if 조건문 (if문)
let num = 0;

if (num >= 10) {
//console.log("num은 10 이상입니다");
//console.log("조건은 참 입니다");
}
// if 조건문 추가 가능 (else if 문은 개수의 제한이 없다)
else if (num >= 5) {
//console.log("num은 5 이상입니다");
} else if (num >= 3) {
//console.log("num은 3 이상입니다");
}
// if 조건문이 거짓일때 작동코드
else {
console.log("조건은 거짓입니다");
}
// 위 예시로는 else if (num >= 5) 가 참 이므로 바로 코드 종료 (아래 else문 실행 안하고 바로 종료)

// if 조건문 주의사항

// if 문은 반드시 else로 끝나거나 eles if 로 끝내야한다.
// if 문으로 시작해야한다 else if 먼저 오고 다음으로 if 문 -> 실행안됨
// else 문애 else if문이 먼저 오는것도 실행 안됨 



// 2. Switch 문
// if문과 기능 자체는 동일하다

// if문과 다른점 
// 다수의 조건을 처리할때 직관적이다


// switch문 () 안에 조건식이 아니라 비교하고 싶은 변수명을 적는다
// case 안에 animal변수의 값이 될 수 있는 후보들을 적는다

//let animal = "cat";
    // switch (animal) {
    // case "cat": {
    //     console.log("고양이")
    //     }

    // case "dog":{
    //     console.log("강아쥐");
    //     }

    // case "bear":{
    //     console.log("곰");
    //     }

    // case "snake":{
    //     console.log("뱀");
    //     }

    // case "tiger":{
    //     console.log("호랑이");
    //     }
    // }

// 지금 그대로 콘솔 창 에서 확인해보면 고양이 뿐만아니라 각각의 case 모두 출력된다
// switch case 문은 기본적으로 소괄호 안에 있는 변수의 값과 일치하는 case를 위에서 부터 아래로 차례대로 실행함
// 일치하는 case를 만나도 아래에 있는 모든 코드도 출력한다


// if 조건문 처럼 작동하기 위해서는 break 키워드를 사용한다
// switch문은 기본적으로 모든 케이스에 브레이크를 필수적으로 작성해야한다

//let animal = "bear";
// switch (animal) {
// case "cat": {
//     console.log("고양이");
//     break;
//     }

// case "dog": {
//     console.log("강아쥐");
//     break;
//     }

// case "bear": {
//     console.log("곰");
//     break;
//     }

// case "snake": {
//     console.log("뱀");
//     break;
//     }

// case "tiger": {
//     console.log("호랑이");
//     break;
//     }
// }


// 어떠한 case에도 해당되지 않았을때 실행할 코드 만드는 방법

let animal = "owl";
switch (animal) {
case "cat": {
    console.log("고양이");
    break;
    }

case "dog": {
    console.log("강아쥐");
    break;
    }

case "bear": {
    console.log("곰");
    break;
    }

case "snake": {
    console.log("뱀");
    break;
    }

case "tiger": {
    console.log("호랑이");
    break;
    }

// if 문에 'else' 같은 기능 
default: {
    console.log("그런 동물은 모릅니다")
    }
}

// 정리 

// 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶다 -> switch
// 복잡한 여러 개의 조건을 이용하고 싶다 -> if 구문