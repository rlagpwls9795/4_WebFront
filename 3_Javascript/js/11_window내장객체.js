const btn1 = document.getElementById("btn1");

/* window.setTimeout(함수, 지연시간(ms)) 확인 */
btn1.addEventListener("click", function(){

    // 0초(클릭하자마자)
    this.style.backgroundColor="red"; // 이벤트 핸들러에서 this == 이벤트가 발생한 html 요소

    // 3초 후 
    window.setTimeout(function(){
        // console.log(this); // window.setTimeout()에서 this == window 겍체
        btn1.style.backgroundColor = "orange";
    }, 3000);

    console.log("중간 출력");
    
    // 6초 후
    window.setTimeout(function(){
        // console.log(this); // window.setTimeout()에서 this == window 겍체
        btn1.style.backgroundColor = "yellow";
    }, 6000);

    // 9초 후
    window.setTimeout(function(){
        // console.log(this); // window.setTimeout()에서 this == window 겍체
        btn1.style.backgroundColor = "green";
    }, 9000);
    

});

// 현재 시간을 반환하는 함수
function currentTime(){
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성
    let hour = now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    // 얻어 온 시간 값이 10미만인 경우 앞에 0 추가
    if(hour<10) { hour="0"+hour; }
    if(min<10) { min="0"+min; }
    if(sec<10) { sec="0"+sec; }

    return hour+" : "+min+" : "+sec;
}

const clock = document.getElementById("clock");
// 페이지가 로딩되자마자 #clock에 현재 시간 출력
clock.innerText=currentTime();

// #clock에 1초마다 현재 시간 출력
const interval = window.setInterval(function(){ // 변수에 함수 저장
    
    clock.innerText=currentTime();

}, 1000);

// window.clearInterval(setInterval()이 저장된 변수
document.getElementById("stop").addEventListener("click", function(){
    window.clearInterval(interval);
});

// 팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function(){
    // 새 탭에서 열기
    window.open("09_배열.html");
});
openPopup2.addEventListener("click", function(){
    // 최소한의 팝업창 형태로 열기
    window.open("09_배열.html", "_blank", "popup");
});
openPopup3.addEventListener("click", function(){
    // 옵션이 지정된 팝업창
    // 옵션 작성 방법 : "K=V,K=V,K=V", 크기 단위 작성 X(px 고정)

    const options ="width=400, height=500, top=50, left=100";

    window.open("09_배열.html","popupWindow", options);
});

// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function(){
    const options ="width=300, height=300, top=50, left=400";
    window.open("팝업.html", "popupWindow", options);
});








