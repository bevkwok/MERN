import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import AuthorFrom from '../components/AuthorFrom';

export default () => {


    return(
        <div>
            <h4>We're sorry, but we could not find the author you are looking for. </h4>
            <h4>
            Would you like to add this author to our database?
            </h4>
            <Link to="/add/">Add an author</Link>
        </div>
    )
}