// 자바스크립트는 동기적이다.호이스팅(var 변수와 함수 선언이 젤 위로 올라가는건)이 된 이후부터 코드가 자동적으로 실행된다
console.log('1');
setTimeout(function ()  {
    console.log('2');

}, 1000); //1초(1000)뒤에 실행해줘
console.log('3');

결과 => 1,3,2
