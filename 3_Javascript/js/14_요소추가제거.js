
// 추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){

    // <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    // </div> 

    // * 요소의 속성을 추가하거나 변경할 때 사용하는 함수
    //   요소.setAttribute("속성명", "속성값");
    // <-> 요소.removeAttribute("속성명"); : 속성 제거

    // ===================================================

    // div 요소 생성
    const div = document.createElement("div");
    div.classList.add("row"); // div class 속성 추가

    // ===================================================

    // input 요소 생성
    const input = document.createElement("input");
    input.classList.add("in"); // input class 속성 추가
    input.setAttribute("type", "number"); // input type="number" 추가

    // ===================================================

    // span 요소 생성 (X 버튼)
    const span = document.createElement("span"); // -> 동적으로 요소 생성
    span.classList.add("remove"); // span class 속성 추가
    span.innerHTML = "&times;" // span에 &times; 추가

    // span에 click 이벤트 동작 추가 (동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){
        
        // 클릭된 X버튼의 부모 요소(div.row) 삭제
        // 요소.remove() : 해당 요소 제거
        this.parentElement.remove(); 
    
    });

    // ===================================================

    // div < input, span 조립
    // div.append(input);
    // div.append(span);
    div.append(input, span);

    // .container에 마지막 자식으로 추가
    document.querySelector(".container").append(div);
    input.focus(); // 화면에 추가된 input에 포커스

});

// * 처음부터 잇던 HTML 요소 == 정적 요소
// * JS로 추가되는 요소 == 동적 요소

// X 버튼 클릭 시 remove 클래스 요소를 모두 얻어 와 for문으로 접근해 click 이벤트 추가
// -> 안 됨!
// -> 처음 HTML 문서 해석 시 remove라는 클래스를 가진 요소가 존재하지 않기 때문에
//    이벤트 동작 추가 구문이 아무 요소에서도 적용되지 않음 (정적 요소 remove에 이벤트 추가한거임)

// const remove = document.getElementsByClassName("remove");

// for(let item of remove){
//     item.addEventListener("click", function(){
//         alert("삭제");
//     });
// }


// input 요소에 작성된 값을 모두 얻어 와 합한 후 출력
document.getElementById("calc").addEventListener("click", function(){

    // 함수는 호출된 시점의 HTML 화면을 기반으로 해서 해석 진행
    const inputList = document.getElementsByClassName("in"); // 함수 밖에 있으면 정적 요소가 됨,,,
    let sum=0;

    for(let item of inputList){
        sum += Number(item.value);
    }

    alert("합계 : "+sum);
});


