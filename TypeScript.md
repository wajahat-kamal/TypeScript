// What is TypeScript 

/*
1. TypeScript is superset of JavaScript
2. TypeScript adds static typing and other features to the language.
3. It was developed by microsoft
*/


// Types of TypeScript

let str: string = "TypeScript"
let num: number = 123456
let bool: boolean = true
let undi: undefined = undefined
let nul: null = null
let unkn: unknown = 251654
let any: any = 5415


// Explicit Types & Inference

Explicit Type: Developer khud type likta hai.
Inference: Typescript automatically type guess karta hai.


// Typescript Union

let id: string | number = "123456"
let statusCode: "pending" | "success" = "pending"