import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


export default props => {
    // const { removeFromDom } = props;
    const { playerId, player, successCallback } = props;
    const deletePlayer = (playerId) => {
        alert("Are you sure you want to remove" + player.name + "?");
        axios.delete('http://localhost:8000/api/players/delete/' + playerId)
            .then(res=>{
                // removeFromDom(authourId);
                successCallback();
                navigate('/players/list');
            })
    }
    return (
        <button onClick={deletePlayer}>
            Delete
        </button>
    )
}