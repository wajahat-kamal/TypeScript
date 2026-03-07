import axios, { type AxiosResponse } from "axios";

interface Shoe {
    id: number
    title: string
    brand: string
    price: number
}


(async function fetchData() {
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
}())