import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Main from '../views/Main';
import { Router, Link, navigate } from '@reach/router';


export default (props) => {
    const { initName, onSubmitProp } = props;
    const [ name, setName ] = useState(initName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        
        <form onSubmit={onSubmitHandler}>
            <p>
            <label>Name: </label>
                <input 
                    type="text" 
                    name="name" value={name}
                    onChange = {(e) => { setName(e.target.value) }}/>
            </p>
            <button onClick={() => {navigate('/')}}>Cancel</button>
            <input type="submit" />
        </form>
    )
}