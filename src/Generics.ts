
function wrapInArray<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray("string"))
console.log(wrapInArray({ name: "Wajahat" }))


// generics with interface
interface Box<T> {
    age: T
}
const n: Box<number> = { age: 16 }