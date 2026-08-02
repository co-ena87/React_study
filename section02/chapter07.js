// 배열 이라는 타입 자체가 실무에서 굉장히 요긴하게 쓰이며 배열 메서드도 많은 곳에 사용된다
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
arr1.push(5,6,7,8); // 여러 개의 요소를 동시에 추가하고 싶으면 ,(콤마)로 구분하고 작성
// console.log(arr1);

// push 메서드는 요소들을 추가하고 난 다음에 추가 반영이 적용된 배열의 길이를 반환한다
const newLength = arr1.push(4, 5, 6, 7);
// console.log(newLength);

// 2. pop
// 배열의 "맨 뒤에" 있는 요소를 제거하고, 반환한다
let arr2 = [1, 2, 3];
const popedItem = arr2.pop(); //메서드의 반환값을 popedItem이라는 변수에 담음

// console.log(popedItem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환한다
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem , arr3);

// 4. unshift
// 배열의 "맨 앞에" 새로운 요소를 추가하는 메서드 이며 이후에 변경된 배열의 길이를 동시에 반환한다
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(arr4);
// console.log(newLength2, arr4);


// shift 와 unshift 메서드는 push나 pop 메서드 보다는 느리게 동작한다
// 배열이라는 건 인덱스와 함께 순차적으로 자료를 저장하는 자료형 -> 값의 순서에 따라 이러한 인덱스가 부착됨
// push 메서드처럼 배열의 맨 뒤에 단순 새로운 값을 추가하게 되면 해당 인덱스를 붙여주기만 하면 된다
// pop 메서드도 배열의 맨 뒤에 있는 값의 인덱스를 삭제하기만 하면 된다 
    // -> 간단함

// shift 처럼 맨 앞에 있는 요소를 제거 하려면 인덱스가 한 차례씩 이동하며 삭제 되어야한다
// unshift 메서드를 호출하게 되면 마찬가지로 배열의 맨 앞에 새로운 요소를 추가하기 때문에 인덱스 또한 움직여야한다 
    // -> 복잡한 과정 때문에 느리게 동작한다

// 되도록이면 push나 pop을 통해서 해결하는게 좋다    


// 5. slice 
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환한다
let arr5 = [1, 2, 3, 4, 5];
arr5.slice(2, 5) //  arr5 배열의 3, 4, 5 까지 자르고 싶다면 slice(-1 , +1) 
let sliced = arr5.slice(2,5);
// console.log(sliced);

// console.log(arr5); // ⚠️  slice 메서드로 잘라냈다 하더라도 원본 배열의 값은 그대로(오리지널 배열 값) 유지된다 

// arr5.slice(2, 5) 처럼 두번째 인덱스부터 배열의 끝까지 자를거면 두번째 인수는 생략 가능하다
// ex. arr5.slice(2);
let sliced2 = arr5.slice(2);
// console.log(sliced2);

// 배열의 뒤에서부터 잘라낸 새로운 배열을 받고 싶다면 음수를 사용한다
let sliced3 = arr5.slice(-1); 
// console.log(sliced3);


// 6. concat
// concat 메서드는 두 개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환한다
let arr6 = [1, 2];
let arr7 = [3, 4];

// arr6 arr7 두 개의 배열을 이어붙여서 새로운 배열로 만들고싶다
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);