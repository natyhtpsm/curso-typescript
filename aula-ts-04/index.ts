function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    let num1 = prompt("First Number");
    let num2 = prompt("Second Number");
    while(typeof num1 !== "number" || typeof num2 !== "number") {
        num1 = prompt("First Number");
        num2 = prompt("Second Number");
    }
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
