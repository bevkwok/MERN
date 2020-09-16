import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Main from '../views/Main';


export default (props) => {
    const {initTitle, initPrice, initDes, onSubmitProp} = props;
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDes);

    const onSudmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }
    
    return (
        <form onSubmit={onSudmitHandler}>
            <p>
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title" value={title}
                    onChange = {(e) => { setTitle(e.target.value) }}/>
            </p>
            <p>
                <label>Price: </label>
                <input 
                    type="text" 
                    name="price" value={price}
                    onChange = {(e) => { setPrice(e.target.value) }}/>
            </p>
            <p>
                <label>Description: </label>
                <input 
                    type="text" 
                    name="description" value={description}
                    onChange = {(e) => { setDescription(e.target.value) }}/>
            </p>
            <input type="submit" />
        </form>
    )
}