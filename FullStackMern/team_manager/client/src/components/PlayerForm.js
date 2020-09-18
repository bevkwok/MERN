import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Main from '../views/Main';
import { Router, Link, navigate } from '@reach/router';

export default (props) => {
    const { initName, initPosition, onSubmitProp } = props;
    const [ name, setName ] = useState(initName);
    const [ position, setPosition ] = useState(initPosition);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position});
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
            <p>
            <label>Position: </label>
                <input 
                    type="text" 
                    name="position" value={position}
                    onChange = {(e) => { setPosition(e.target.value) }}/>
            </p>
            <button onClick={() => {navigate('/players/list')}}>Cancel</button>
            <input type="submit" />
        </form>
    )
}