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

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                setProducts([...products.data, res.data.product]);
            })
    }



    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initTitle="" initPrice="" initDes="" />
            <hr />
            {loaded && <ProductList products={products} deleteProduct={deleteProduct} />}
        </div>
    )
}