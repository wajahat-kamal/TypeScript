
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


// methods
interface machine {
    start(): void;
    stop(): void
}
const machine: machine = {
    start(){console.log("Start")},
    stop(){console.log("Stop")},
}

// interface will merge
interface Costomer{
    name: string
}
interface Costomer{
    age: number
}
const customer: Costomer = {name: "Wajahat", age: 16}


