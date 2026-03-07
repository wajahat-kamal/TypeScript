
function wrapInArray<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray("string"))
console.log(wrapInArray({ name: "Wajahat" }))


// generics with interface
interface Box<T> {
    content: T
}
const c1: Box<string> = { content: "Hey, whats your name!" }
const c2: Box<number> = { content: 16 }