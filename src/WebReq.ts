import axios from "axios";


axios.get("https://dummyjson.com/products")
.then(res => console.log(res))
