import axios from "axios";



await axios.get("https://dummyjson.com/products")
    .then(res => {
        for (const product of res.data.products.splice(0, 10)) {
            const res = {
                title: product.title,
                brand: product.brand,
                price: product.price
            }
            console.log(res)
        }
    })
    .catch(err => console.log(err))