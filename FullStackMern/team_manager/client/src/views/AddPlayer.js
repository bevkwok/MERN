import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Header from '../components/Header';
import PlayerForm from '../components/PlayerForm';


export default () => {

    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);

    const addPlayer = player => {
        axios.post('http://localhost:8000/api/players/new', player)
            .then(res => {
                setPlayers([...players, res.data]);
                navigate('/players/list');
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
        <div>
            <div className="headerDiv">
                <Header />
                <div className="ListDiv">
                <h3>
                    <Link to="/players/list">List</Link>
                    <span>|</span>
                    <Link to="/players/addplayer">Add Player</Link>
                    <span>|</span>
                    <Link to="/players/editplayer/:id">Edit Player</Link>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <PlayerForm onSubmitProp={addPlayer} initName="" initPosition="" />
                </h3>
                </div>
            </div>               
        </div>
        </div>
    )
}