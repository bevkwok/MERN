import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Main from '../views/Main';


export default props => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                // removeFromDom(productId)
                console.log(res)
                props.deleteProduct(productId);
                navigate('/')
            })
    }
    
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    {/* <Link to = {`/${product._id}`}>${product.price} - {product.title} </Link> */}
                    <Link to = {"/" +product._id}> ${product.price} - {product.title} </Link>
                    <button onClick = {(e) => {deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </p>
            })}
        </div>
    )
}