// xml 대신 json을 요즘 많이씀

// 1. 오브젝트를 제이슨으로 변환하는법
let json = JSON.stringify(true);
console.log(json);
 결과 => true

 let json = JSON.stringify(['apple','banana']);
 console.log(json);
  결과 => ["apple","banana"]

// 2. 제이슨을 오브젝트로 변환하는법
json  = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
