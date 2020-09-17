import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


export default props => {
    // const { removeFromDom } = props;
    const { authorId, successCallback } = props;
    const deleteAuthor = (authourId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
            .then(res=>{
                // removeFromDom(authourId);
                successCallback();
                navigate('/');
            })
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}