import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Main from '../views/Main';
import DeleteButton from './DeleteButton';

export default props => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    const sortAuthor = authors => {
        [...authors].sort();
    }

    return (
        <div>
                <table>
                    <tr>
                        <th>Author</th> 
                        <th>Actions available</th>
                    </tr>
                    {[].concat(authors).sort((a, b) => a.name > b.name ? 1 : -1).map((author, idx) => {
                    return <tr key={idx}>
                        <td>{author.name}</td>
                        <td>
                        
                            {/* <Link to = {"/edit/"+author._id}>Edit</Link> */}

                            <button onClick={() => {navigate('/edit/'+author._id)}}>Edit</button>


                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                        </td>
                    </tr>
                
                
                    })}
                </table>
        </div>
    )
}