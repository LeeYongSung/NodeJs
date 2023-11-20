// 매개변수에서의 구조 분해 할당
function printPersonInfo({ name, age, gender }) {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
  }

  // 화살표 함수로 쓸 경우
let arrowFunc = ({ name, age, gender }) => {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}  
  const person = {
    name: 'aloha',
    age: 20,
    gender: 'male'
  };
  
  printPersonInfo(person); // 출력: Name: aloha, Age: 20, Gender: male
  arrowFunc(person); // 출력: Name: aloha, Age: 20, Gender: male