import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
import Header from '../components/Header';

export default props => {

    const { id } = props;
    const[player, setPlayer] = useState();
    const[loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                console.log(res.data);
                setPlayer(res.data);
                setLoaded(true);
            })
            .catch(err =>{
                navigate('/error/');
            })
    }, [])

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/players/update/' + id, player)
            .then(res => {
                console.log(res.data)
                navigate('/players/list');
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
            <div className="headerDiv">
                <Header />
                <div className="ListDiv">
                <h3>
                    <Link to="/players/list">List</Link>
                    <span> | </span>
                    <Link to="/players/addplayer">Add Player</Link>
                    <span> | </span>
                    <Link to="/players/editplayer/:id">Edit Player</Link>
                    {loaded && (
                        <>
                            {errors.map((err, index) => <p key={index}>{err}</p>)}
                            <PlayerForm onSubmitProp={updatePlayer} initName={player.name} initPosition={player.position} />
                        </>
                        )}
                </h3>
                </div>
            </div> 
        </div>
    )
}