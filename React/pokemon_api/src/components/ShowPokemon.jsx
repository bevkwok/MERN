import React, {useEffect, useState} from 'react';

const ShowPokemon = ({idx, thisPokemon}) => {


    return (
        <div>
            Name: {thisPokemon.name}
        </div>
    )
}

export default ShowPokemon;