import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import AuthorFrom from '../components/AuthorFrom';


export default props => {

    const { id } = props;
    const[author, setAuthor] = useState();
    const[loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    // const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err =>{
                navigate('/error/');
            })
    }, [])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/authors')
    //         .then(res => {
    //             // console.log(res.data);
    //             setAuthors(res.data);
    //             setLoaded(true);
    //         });
    // }, []);


    

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/update/' + id, author)
            .then(res => {
                console.log(res.data)
                navigate('/');
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                console.log(errorArr);
                setErrors(errorArr);
            })
    }


    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <p>Edit this author</p>
            
            {loaded && (
                <>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <AuthorFrom onSubmitProp={updateAuthor} initName={author.name}/>
                </>
                )}
        </div>
    )
}