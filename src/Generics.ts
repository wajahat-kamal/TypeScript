

function wrapInArray<T>(item: T): T[] {
    return [item]
}
wrapInArray("string")
wrapInArray({name: "Wajahat"})
