
function greet(person: string): string {
    return `Hello ${person}. Welcom to Chai aur Typescript!`
}
const personName = "Wajahat Kamal"
console.log(greet(personName));


// unions
const orders = ["10", "25", "28", "11"]
let currentOrder;

for (const order in orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
