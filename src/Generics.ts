
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


// 2nd example of generics with interface
interface ApiRes<T> {
    statusCode: number,
    message: string,
    data: T
}
const response: ApiRes<{ user: string }> = { statusCode: 200, message: "success", data: { user: "Wajahat" } }