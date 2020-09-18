import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data));
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }

    const sortPlayer = players => {
        [...players].sort();
    }

    return (
        <div>
                <table>
                    <tr>
                        <th>Player Name</th> 
                        <th>Position</th>
                        <th>Actions available</th>
                    </tr>
                    {[].concat(players).sort((a, b) => a.name > b.name ? 1 : -1).map((player, idx) => {
                    return <tr key={idx}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>

                            <button onClick={() => {navigate('/players/editplayer/'+player._id)}}>Edit</button>

                            <DeleteButton playerId={player._id} player = 
                            {player} successCallback={()=>removeFromDom(player._id)}/>
                        </td>
                    </tr>
                    })}
                </table>
        </div>
    )
}