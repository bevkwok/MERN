import React, {useEffect, useState} from 'react';
import DisplayPokemon from './DisplayPokemon';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState(["testing"]);
    const [visible, setvisible] = useState(false);

    const onClickHandler = (e) => {
        setvisible(true);
    }

    useEffect((e) => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        })
    }, [])


    return (
        <div>
            <button onClick={(e) => setvisible(true)}>Show Pokemon </button>
            { visible ? <DisplayPokemon pokemon={pokemon} /> : null}
            
            {/* <DisplayPokemon pokemon={pokemon} /> */}

        </div>
    )
}

export default Pokemon;