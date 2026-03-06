
interface User {
    username: string,
    bio?: string
}

const user1: User = { username: "Wajahat" }
const user2: User = { username: "Kamal", bio: "Learning TS" }


//  readonly
interface Config {
    readonly appName: string, // set only one time
    version: number
}
const config1: Config = { appName: "Youtube", version: 1 }
// config1.appName = "cursor" // cannot change because its readonly
// console.log(config1);


// 
type Cup = { size: string }
let smallCup: Cup = { size: "200ml" }
let largeCup = { size: "200ml", material: "steel" }

smallCup = largeCup
console.log(smallCup);
