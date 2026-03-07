// get data using fetch and axios

import axios, { type AxiosResponse } from "axios";

interface Shoe {
    id: number
    title: string
    brand: string
    price: number
}

// get data using fetch 
async function fetchData() {
    try {
        
    } catch (error) {
        
    }
}


// get data using axios
async function AxiosData() {
    try {
        const res: AxiosResponse = await axios.get("https://dummyjson.com/products")
        for (const product of res.data.products.splice(0, 10)) {
            const data: Shoe = {
                id: product.id,
                title: product.title,
                brand: product.brand,
                price: product.price
            }
            console.log(data)
        }
    } catch (error) {
        console.log(error);
    }
}
// AxiosData()



