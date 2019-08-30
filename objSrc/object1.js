function Animal (name='', age='') {
  this.name = name;
  this.age = age;
}
Animal.prototype.category = '动物'
Animal.prototype.sayHello = function sayHello() {
  console.log(`我属于：${this.category}, 我的名字是：${this.name}， 我的年龄是： ${this.age}`)
}

let dog = new Animal('小狗', 1)
dog.sayHello()
let cat = new Animal('小猫', 2)
cat.sayHello()

// // dog 和 cat 是同一个原型对象的实例
// console.log(dog.__proto__.constructor === cat.__proto__.constructor) // true
// console.log("dog.__proto__.constructor:", dog.__proto__.constructor)
// // dog 和 cat 拥有同一个构造函数
// console.log(dog.constructor === cat.constructor)  // true
// console.log(dog instanceof Animal)  // true
// console.log(cat instanceof Animal)  // true

// console.log(dog.category === cat.category) // true
// console.log(dog.sayHello === cat.sayHello) // true

// // isPrototypeOf() 这个方法用来判断，某个proptotype对象和某个实例之间的关系。
// console.log(Animal.prototype.isPrototypeOf(dog)) // true
// console.log(Animal.prototype.isPrototypeOf(cat)) // true

// // 每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
// console.log(dog.hasOwnProperty ('name')) // true
// console.log(dog.hasOwnProperty('category')) // false

// in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
console.log('name' in dog) // true
console.log('category' in dog) // true

for (let key in dog) {
  console.log("key:", key)
}