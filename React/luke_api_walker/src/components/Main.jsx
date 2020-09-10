import React, { useState } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


const Main = (props) => {
    
    const [SearchFor, setSearchFor] = useState("people"); //********** */
    const [id, setid] = useState("");

    const searchHandler = (e) => {
        setSearchFor(e.target.value);
    }

    const idHandler = (e) => {
        setid(e.target.value);
    }

    const submitForm = (e) => {
        // navigate(`/${SearchFor}/${id}`);
        axios.get('https://swapi.dev/api/'+ `${SearchFor}/${id}`)
            .then(response =>{
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Search for: </label>
                    <select value={SearchFor} onChange={searchHandler}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="text" value={id} onChange={idHandler} />
                </div>
                {/* <input type="submit" value="Search"/> */}
                {/* <Link to ={`/${SearchFor}/${id}`}><input type="submit" value="Search"/></Link> */}
                <Link to ={`/${SearchFor}/${id}`}><button onClick={submitForm}>Search</button></Link>
            </form>
        </div>
    )
}

export default Main;