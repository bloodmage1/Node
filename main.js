//@ts-check
// Formatting, Linting, Type Checking
// Formatiing: Prettier
// Linting: ESLint
// Type checking: TypeScript

// const someString = "Hello"
// const result = Math.log(someString)
// console.log(result)

// function and(x) {
//     return function print(y) {
//         return x + " and " + y
//     }
// }

// const saltAnd = and("salt")
// console.log(saltAnd("pepper"))
// console.log(saltAnd("sugar"))

// const waterAnd = and('water')
// console.log(waterAnd("Juice"))

// function getCounter() {
//     var result = {
//         count: count,
//         total: 0
//     }
//     function count() {
//         result.total += 1
//     }
//     return result
// }

// var counter = getCounter()
// counter.count()
// counter.count()

// console.log(counter.total)

// function getCounter() {
//     var result = {count: count, total: 0}
//     function count() { result.total += 1 }
//     return result
// }

// var counterA = getCounter()
// counterA.count()
// counterA.count()
// counterA.count()

// var counterB = getCounter()
// counterB.count()

// console.log(counterA, counterB)

// function Person(name) {
//     this.name = name
// }

// Person.prototype.greet = function.greet() {
//     return 'HI, ${this.name}!'
// }

// const me = new Student("jongho")
// console.log(me)


// function Student(name) {
//     this.name = name
// }

// const me = new Student("jongho")
// console.log(me)

// const personalData = {
//     nickname: "jh",
//     email: "jh92@email.com"
// }

// const publicData = {
//     age: 31,
// }

// const user = {
//     ...personalData,
//     ...publicData,
// }
// // const { nickname, ...personalData } = user
// console.log(personalData)

// const pets = ["dog", "cat"]
// const predator = ["wolf", "tiger"]
// const animals = [...pets, ...predator]

// console.log(animals)

// const [head, ...rest] = [1, 2, 3]
// console.log(head)
// console.log(rest)

/** @type {person[]} */
const people = [
    {
        age: 20,
        city: "서울",
        pet: ["cat","dog"],
    },
    {
        age: 40,
        city: "부산",
    },
    {
        age: 31,
        city: "대구",
        pet: ["cat","dog"],
    },
    {
        age: 36,
        city: "서울",
    },
    {
        age: 27,
        city: "부산",
        pet: "cat",
    },
]

/** 
 * 1. 30대 미만이 한 명이라도 사는 모든 도시
 * 2. 각 도시별로 개와 고양이를 키우는 사람의 수
 */

function solveA() {
    /** @type {string[]} */
    const cities = []

    for (const person of people) {
        console.log(person)
        }

    return cities
}

console.log(solveA)