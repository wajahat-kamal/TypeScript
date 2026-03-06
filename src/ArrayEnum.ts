// Arrays, Tuples and Enums

// array of objects
type Chai = {
    name: string,
    price: number
}
const menu: Chai[] = [
    { name: "Masala Chai", price: 300 },
    { name: "Adrak Chai", price: 200 }
]

// readonly array dose not update/change
const cities: readonly string[] = ["Karachi", "Lahore", "Peshawar"]
// cities.push("Islamabad")  // not working
// console.log(cities);


// tuple
const location: [string, number] = ["Karachi", 200]

// readonly tuple
