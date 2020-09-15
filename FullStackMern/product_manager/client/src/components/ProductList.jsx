import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


export default props => {
    
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to = {`/${product._id}`}>${product.price} - {product.title} </Link>
                    </p>
            })}
        </div>
    )
}