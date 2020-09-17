import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import AuthorList from '../components/AuthorList';


export default () => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            });
    }, []);


    const deleteAuthor = (id) => {
        const newAuthors = authors.filter(author => author._id !== id);
        console.log(newAuthors);
        setAuthors(newAuthors);
    }

    return(
        <div>
            <div>
                <h1>Favorite authors</h1>
                <Link to="/add/">Add an author</Link>
                <p>We have quotes by:</p>
                {loaded && <AuthorList authors={authors} deleteAuthor={deleteAuthor} />}
            </div>

        </div>
    )
}