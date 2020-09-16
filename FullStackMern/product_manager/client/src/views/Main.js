import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);



    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                console.log(res.data.product);
                setProducts(res.data.product);
                setLoaded(true);
            });
    }, [])

    const deleteProduct = (id) => {
        const newProducts = products.filter(product => product._id !== id);
        console.log(newProducts);
        setProducts(newProducts);
    }



    return(
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            {loaded && <ProductList products={products} deleteProduct={deleteProduct} />}
        </div>
    )
}