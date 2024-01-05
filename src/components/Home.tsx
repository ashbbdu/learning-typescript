import axios from "axios";
import { useEffect, useState } from "react"
import { MyObj } from "../interfaces";



const Home = () => {
    const [products, setProducts] = useState<MyObj[]>([]);    

    const fetchProducts = async () => {
        const data = await axios.get('https://fakestoreapi.com/products');
        setProducts(data.data)
    }
    useEffect(() => {
        fetchProducts();
    },[])
  return (
    <div>
        List of Products
        {
            products.map(res => {
                return (
                    <div key={res.id}>
                        <h2>{res.title}</h2>
                        <h3>{res.rating.count}</h3>
                        <h3>{res.rating.rate}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home