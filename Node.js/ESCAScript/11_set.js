// Set 생성
const set = new Set();

// 원소 추가
set.add('value1');
set.add('value2');

// 원소 조회
console.log(set.has('value1')); // 출력 : true

// 원소 삭제
set.delete('value1');

// Set 크기 확인
console.log(set.size) // 출력 : 1


// 초기 데이터를 가진 Set 생성
const set2 = new Set(['value1', 'value2']);

console.log('\n----------------------------------\n');

// Set 순회
set2.forEach((value) => {
    console.log(value);
});

// Set의 원소 순회
for(const value of set2) {
    console.log(value);
}

