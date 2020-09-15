import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSudmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    return (
        <form onSubmit={onSudmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange = {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" onChange = {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange = {(e) => setDescription(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )
}