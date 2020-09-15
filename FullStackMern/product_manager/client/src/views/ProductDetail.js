import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})
    useEffect (() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);})
    }, [])

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
        </div>
    )
}