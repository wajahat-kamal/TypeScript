import axios, { type AxiosResponse } from "axios";

interface Shoe {
    title: string,
    brand: string,
    price: number
}


(async function fetchData() {
    try {
        const res: AxiosResponse = await axios.get("https://dummyjson.com/products")
        for (const product of res.data.products.splice(0, 10)) {
            const res: Shoe = {
                title: product.title,
                brand: product.brand,
                price: product.price
            }
            console.log(res)
        }
    } catch (error) {
        console.log(error);
    }
}())