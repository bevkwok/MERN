import React, { useEffect, useState } from 'react'
import { Router, Link, navigate } from '@reach/router';

export default () => {


    return(
        <div>
            <h4>We're sorry, but we could not find the player you are looking for. </h4>
            <h4>
            Would you like to add this player to our database?
            </h4>
            <Link to="/players/addplayer">Add an author</Link>
        </div>
    )
}