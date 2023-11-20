// 클래스 정의
class Animal {
    // 생성자 정의
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    // 메서드 정의
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// 상속을 이용한 서브 클래스 정의
class Dog extends Animal {
    constructor(name) {
        // 부모 클래스의 생성자 호출
        super(name, 'Woof');
    }
}
// 클래스를 이용한 객체 생성
const cat = new Animal('Cat', 'Meow');
const dog = new Dog('Dog');

// 객체의 메서드 호출
cat.makeSound();
dog.makeSound();