import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Main from '../views/Main';
import DeleteButton from './DeleteButton';


export default props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.product));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    
    return (
        <div>
            {products.map((product, idx) => {
                return <p key={idx}>
                    {/* <Link to = {`/${product._id}`}>${product.price} - {product.title} </Link> */}
                    <Link to = {"/" +product._id}> ${product.price} - {product.title} </Link>
                    <Link to = {"/update/" +product._id}>Edit</Link>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
            })}
        </div>
    )
}