import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import AuthorFrom from '../components/AuthorFrom';

export default () => {

    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    const addAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                setAuthors([...authors, res.data]);
                navigate('/');
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorFrom onSubmitProp={addAuthor} initName=""/>
        </div>
    )
}