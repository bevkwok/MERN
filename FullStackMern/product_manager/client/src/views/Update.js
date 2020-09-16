import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text"
                    name="price"
                    value={price}
                    onChange={(e) => {setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}} />
                </p>
                <input type="submit" /><br />
                <Link to={"/" + id}>Back to Product</Link>
            </form>
        </div>
    )
}