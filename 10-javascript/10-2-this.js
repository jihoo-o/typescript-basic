console.log(this); // window

function simpleFunc() {
    console.log(this);
}

// <-> window.simpleFunc()
simpleFunc(); // window

console.clear();

class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    };
}
const counter = new Counter();
counter.increase(); // Counter

// let, const로 선언한 변수는 window에 등록되어 있지 않으므로
// <-> caller를 호출하는 오브젝트가 없는 상황
const caller = counter.increase;
caller(); // undefined

// 💩 var는 window에 등록됨
var badVar = counter.increase;
window.badVar();

// 정의한 주체 Counter가 아닌
// 부르는 주체 Bob을 출력함
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob

// ✨ this 보존하기
// 1. bind
const bindedCaller = counter.increase.bind(counter);
bindedCaller(); // Counter

// 2. arrow function
class Counter2 {
    count = 0;
    increase = () => {
        console.log(this);
    };
}
const arrowCaller = new Counter2().increase;
arrowCaller();
