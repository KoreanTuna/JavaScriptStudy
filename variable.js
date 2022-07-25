//자바 스크립트 ES5까지는 var로만 선언이 가능했다.
//ES6부터 const, let 도입.
//var는 function-level-Scope를 지원한다 (<> block-level-scope)
//이로 인해 의도치않게 전역변수로 선언되는 문제가 발생할 수 있다.


//var를 통한 선언
//자바스크립트 var키워드로 선언된 변수는 선언과 초기화가 동시에 진행된다. 선언과 동시에 암묵적으로 변수에 undefined 타입의 값 할당.
var scope;



//자바스크립트 변수 호이스팅 : 자바스크립트는 런타임 시점 이전에 코드를 검사하며 변수 선언된 부분을 먼저 실행한다.
//때문에 변수선언에 앞선 줄에서 변수를 사용해도 에러가 발생하지 않는다.
//변수 선언 뿐만 아니라, var, let, const, function, function*, class 키워드를 선언하는 모든 식별자는 호이스팅된다.
console.log(score);
var score;



//변수 선언 부분은 호이스팅되지만, 할당은 호이스팅 되지 않는다.
console.log(score); // undefined 출력

var score;
score = 80;

console.log(score); //80 출력


//변수 값을 할당, 재할당 해줄때마다 변수값의 메모리위치가 바뀌고, 이전 사용하던 값들은 가비지 콜렉션에 의해 메모리에서 해제되지만 시점을 예측할 수 없다.
var score; //undefined 
score = 80; //메모리 위치 변경되며 80으로 할당.
score = 90; //메모리 위치 변경되며 90으로 할당.


