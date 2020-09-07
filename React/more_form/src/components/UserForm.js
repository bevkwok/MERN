import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        // if(e.target.value.length < 2) {
        //     setFirstNameError("First Name must be at least 2 character long.")
        // } else {
        //     setFirstNameError("");
        // }

        e.target.value.length < 2 ? setFirstNameError("First Name must be at least 2 character long.") : setFirstNameError("")
    }

    const handleLasttName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 character long.")
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 character long.")
        } else {
            setEmailError("");
        }
    }

    const handlePW = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 character long.")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPW = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value != password ) {
            setconfirmPasswordError("Confirm Password must match Passward!")
        } else {
            setconfirmPasswordError("");
        }
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } value={ firstName } />
                    { 
                        firstNameError ? 
                    <p style={{color: 'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLasttName } value={ lastName } />
                    { 
                        lastNameError ? 
                    <p style={{color: 'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value={ email } />
                    { 
                        emailError ? 
                    <p style={{color: 'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePW } value={ password } />
                    { 
                        passwordError ? 
                    <p style={{color: 'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPW } value={ confirmPassword } />
                    { 
                        confirmPasswordError ? 
                    <p style={{color: 'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <p>Frist Name  { firstName }</p>
                <p>Last Name  { lastName }</p>
                <p>Email  { email }</p>
                <p>Password  { password }</p>
                <p>Confirm Password  { confirmPassword }</p>
            </div>
        </div>
    );
}

export default UserForm;