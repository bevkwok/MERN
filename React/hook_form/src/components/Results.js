import React, { useState } from 'react';
import UserForm from './UserForm'


const Result = (props) =>{
    const { firstName, lastName, email, password, confirmPassword } = props;
    return(
        <div>
            <p>Frist Name  { firstName }</p>
            <p>Last Name  { lastName }</p>
            <p>Email  { email }</p>
            <p>Password  { password }</p>
            <p>Confirm Password  { confirmPassword }</p>
        </div>
    )
}

export default Result;
