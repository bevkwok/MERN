import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    const onbtnClick = (e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response =>{
                console.log(response);
                setPokemon(response.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(()=>{
        
    }, []);

    return(
        <div>
            {/* <DisplayPokemon pokemon={pokemon} /> */}
            <button onClick={onbtnClick}>Show Pokemon </button>
            <DisplayPokemon pokemon={pokemon} />
        </div>
    )
}

export default Pokemon;