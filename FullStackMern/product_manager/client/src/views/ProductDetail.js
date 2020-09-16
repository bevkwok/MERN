import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Main from '../views/Main';


export default props => {
    const [product, setProduct] = useState({})
    useEffect (() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);})
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                // removeFromDom(productId)
                console.log(res)
                navigate('/')
            })
    }

    return (
        <div>
            <p>
                Product: {product.title}
            </p>
            <p>
                Price: {product.price}
            </p>
            <p>
                {product.description}
            </p>
            <Link to={"/update/" + product._id}>Edit</Link><br/>

            <button onClick = {(e) => {deleteProduct(product._id)}}>delete</button>
            
            <Link to={"/"}>Back to Main</Link>

        </div>
    )
}