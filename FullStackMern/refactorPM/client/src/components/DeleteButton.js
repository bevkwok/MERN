import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


export default props => {
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res=>{
                successCallback();
                navigate('/');
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}