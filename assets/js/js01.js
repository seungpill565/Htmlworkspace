var outDiv = document.getElementById('out');
var btn3 = document.getElementById('btn3');

function btn3Action() {
    outDiv.innerHTML = 'Hello, Javascript3!!';

    //자바 스크립트를 통해 해당 요소의 스타일도 수정할 수 있다
    //property는 -를 이용하지만, 자바스크립트에서는 CamelCase로 수정해서 사용해야 한다.
    outDiv.style.background = 'red';
    outDiv.style.color = 'white';
    outDiv.style.fontWeight = '900';
    outDiv.style.fontSize = '35px';
}

//자바 스크립트는 함수를 변수처럼 넘기는 것이 가능하다

//btn3Action() : 해당 함수를 실행하는 것
//btn3Action : 해당 함수를 값으로 사용하는 것

//변수에 함수를 저장할 수 있다
var myFunc = btn3Action;

btn3.addEventListener('click', btn3Action);