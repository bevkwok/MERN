import React from 'react';

const Num = props => {
    return(

        <div>
            {
                isNaN(props.x) ? 
                <p>
                The word is {props.x}
                </p> :
                <p>
                The number is {props.x}
                </p>
            }
        </div>
        
    )
}

export default Num;