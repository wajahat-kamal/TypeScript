
function getChai(kind: string | number): string {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`
    }
    return `Chai Orders: ${kind}`
}
// console.log(getChai("masala"));
// console.log(getChai(4));

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



class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`
    }
}

class CuttingChai {
    serve() {
        return `Serving Cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}
// console.log(serve(new KulhadChai()));


// type aliases
type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" && obj !== null &&
        typeof obj.type === "string"
        && typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}