import React, {useState} from 'react';
import BoxForm from './BoxForm';

const BoxDisplay = ({boxes}) =>{

    return (
        <div>
            {
                boxes.map((value, index) => 
                    <div key= {index} >
                        { value.color } { value.size }
                    </div>
                )
            }
        </div>
    )
}

export default BoxDisplay;
