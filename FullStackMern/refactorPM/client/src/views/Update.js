import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/update/' + id, product)
            .then(res => console.log(res.data));
    }
    return (
        <div>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initTitle={product.title}
                        initPrice={product.price}
                        initDes={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}