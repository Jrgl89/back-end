function getNumber(id) {
    const val = document.getElementById(id).value;
    return Number(val);
}
function printResult(result) { 
    document.getElementById("result").innerText = result;
}
function add() {
    const num1 = getNumber("num1");
    const num2 = getNumber("num2");
    const result = num1 + num2;
    printResult(result);
}
function sub() {
    const num1 = getNumber("num1");
    const num2 = getNumber("num2");
    const result = num1 - num2;
    printResult(result);
}
function mult() {
    const num1 = getNumber("num1");
    const num2 = getNumber("num2");
    const result = num1 * num2;
    printResult(result);
}
function div() {
    const num1 = getNumber("num1");
    const num2 = getNumber("num2");
    if (num2 === 0) return alert("Тоог 0т хувааж болохгүй.");
    const result = num1 / num2;
    printResult(result);
}
