import axios from "axios";

interface Shoe {
    title: string,
    brand: string,
    price: number
}


const fetchData = async () => {
    try {
        const res = await axios.get("https://dummyjson.com/products")
    } catch (error) {
        console.log(error);
    }
}


await axios.get("https://dummyjson.com/products")
    .then(res => {
        for (const product of res.data.products.splice(0, 10)) {
            const res: Shoe = {
                title: product.title,
                brand: product.brand,
                price: product.price
            }
            console.log(res)
        }
    })
    .catch(err => console.log(err))