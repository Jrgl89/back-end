function nemeh() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const num1 = Number(a);
    const num2 = Number(b);
    const sum = num1 + num2
    document.getElementById("result").innerText = sum;
    console.log(sum);
}
function hasah() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const num1 = Number(a);
    const num2 = Number(b);
    const sum = num1 - num2
    document.getElementById("result").innerText = sum;
    console.log(sum);
}
function urjih() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const num1 = Number(a);
    const num2 = Number(b);
    const sum = num1 * num2
    document.getElementById("result").innerText = sum;
    console.log(sum);
}
function huvaah() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const num1 = Number(a);
    const num2 = Number(b);
    const sum = num1 / num2
    document.getElementById("result").innerText = sum;
    console.log(sum);
}