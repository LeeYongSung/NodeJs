const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map);
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));

// 초기 데이터를 가진 Map 생성
const map2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

console.log('\n--------------------------------\n')
// Map 순회
map.forEach((value, key) => {
    console.log(`${key} : ${value}`)
})

// Map의 키 순회
for (const key of map.keys()) {
    console.log(key);
}

// Map의 값 순회
for (const value of map.values()) {
    console.log(value);
}

// Map의 항목 (키-값 쌍) 순회
for (const [key, value] of map.entries()) {
    console.log(`${key} : ${value}`);
}