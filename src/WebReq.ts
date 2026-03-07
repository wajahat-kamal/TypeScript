import axios from "axios";


axios.get("https://dummyjson.com/products")
.then(res => {
    for (const product of res.data.products.splice(0,10)) {
        console.log({title: product.title, brand: product.brand, price: product.price})
    }
})
.catch(err => console.log(err))