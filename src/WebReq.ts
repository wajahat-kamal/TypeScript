import axios from "axios";


axios.get("https://dummyjson.com/products")
.then(res => console.log(res.data.products.splice(0, 10)))
.catch(err => console.log(err))