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
    
}