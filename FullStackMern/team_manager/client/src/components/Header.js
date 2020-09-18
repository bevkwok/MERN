import React from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';

export default props => {
    
    return (
        <div>
            <h2>
                <Link to="/players/list">Manage Players</Link>
                <span>|</span>
                <Link to="/status/game">Manage Player Status</Link>
            </h2>
        </div>
    )
}