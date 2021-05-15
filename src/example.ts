// Работа с простыми типами ################################
type typeConcat = (str1: string, str2: string) => string

const concat: typeConcat = (str1, str2) => str1 + str2

// console.log(concat('Hello ', 'World'))
// console.log('Hello ', 'World')


// Работа с интерфейсами ################################
type myArray = {
    [index: number]: string | number;
}
type myObj = {
    [index: number]: object;
}
interface myInterface {
    howIDoIt: string,
    simArray: myArray,
    withData: myObj,
}

const myHometask: myInterface = {
    howIDoIt: "I Do It Wel",
    simArray: ["string one", "string two", 42],
    withData: [{
        howIDoIt: "I Do It Wel",
        simeArray: ["string one", 23]
    }],
}


// Типизация функций, используя Generic ################################
interface MyArray<T> {
    [N: number]: T;

    // map<U>(fn: (el: T) => U): U[]
    reduce<U>(fn: (acc: U, el: T) => U, initialValue: U): U
}

const tsArray: MyArray<number> = [1, 2]

console.log(tsArray.reduce((i, j) => i + j, 12))
// console.log(tsArray.map((i) => i + 2))
