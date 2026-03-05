
function getChai(kind: string | number): string {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
    }
    return `Chai Orders: ${kind}`
}
console.log(getChai("masala"));

// unions
const orders = ["10", "25", "28", "11"]
let currentOrder: string | undefined;

for (const order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}
// console.log(currentOrder);
