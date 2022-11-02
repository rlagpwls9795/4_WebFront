const num1 = document.getElementById("num1"); // 요소 추적 (값, 속성 추적 아님)
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function fnPlus(){ //함수 정의 (코드가 있다는 것을 인식하고 호출 전까지 수행 X)
    //함수가 호출되었을 때 내부 코드 실행
    result.innerText = Number(num1.value) + Number(num2.value);
}
function fnMinus(){
    result.innerText = Number(num1.value) - Number(num2.value);
}
function fnMulti(){
    result.innerText = Number(num1.value) * Number(num2.value);
}
function fnDiv(){
    result.innerText = Number(num1.value) / Number(num2.value);
}
function fnMod(){
    result.innerText = Number(num1.value) % Number(num2.value);
}


