import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import PlayerList from '../components/PlayerList';
import Header from '../components/Header';

export default () => {

    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                console.log(res.data);
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err=>{
                setLoaded(true);
            })
    }, []);


    const deletePlayer = (id) => {
        const newPlayer = players.filter(player => player._id !== id);
        console.log(newPlayer);
        setPlayers(newPlayer);
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
                        {loaded && <PlayerList players={players} deletePlayer={deletePlayer} />}
                    </h3>
                    </div>
                </div>               
            </div>
        </div>
    )
}