
function wrapInArray<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray("string"))
console.log(wrapInArray({name: "Wajahat"}))

