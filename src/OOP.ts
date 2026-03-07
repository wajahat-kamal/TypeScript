class Chai {
    flaver: string
    price: number

    constructor(flaver: string, price: number) {
        this.flaver = flaver
        this.price = price
    }
}

const masalaChai = new Chai("masala", 150)
// console.log(masalaChai);


// Access Modifier / private, public, protected
class Shop {
    public flavers: string[] = ["masala", "ginger", "elaichi"]
    private secretIngredients: string[] = ["leaves", "cardamom"]
    reveal() {
        return this.secretIngredients
    }
}


// getter & setter
class Cup {
    private _capacity: string = "250ml"


    public get capacity(): string {
        return this._capacity
    }

    public set capacity(value: string) {
        this._capacity = value;
    }

}

const cup = new Cup()
cup.capacity = "500ml"
// console.log(cup);


// static
class EkShop {
    static shopName = "ChaiCode Cafe"
}
console.log(EkShop.shopName);
