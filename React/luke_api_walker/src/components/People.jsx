import React, {useState, useEffect} from 'react';
import axios from 'axios';


const People = ({id, SearchFor}) => {

    const [person, setperson] = useState({
        name: "",
        gender: "",
        height: "",
        eye_color: "",
        birth_year: ""
    });

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                console.log(response);
                setperson(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    


    return (
        <div>
            <h2>{person.name}</h2>
            <p>Gender: { person.gender }</p>
            <p>Height: { person.height }</p>
            <p>Eye Color: { person.eye_color }</p>
            <p>Birth Year: { person.birth_year }</p>
        </div>
    )
}

export default People;