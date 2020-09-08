import React, {useState} from 'react';
import List from './List';

const Display = ({list, deleteHandler}) => {

    

    return(
        <div>
            <div>
            {
                list.map((val, i) =>
                    <ul>
                        {/* <li key={i} type="checkbox">{val}</li> */}
                        {/* <label key={i}>
                        <input  type="checkbox" checked={isDone} onChange={e => setisDone(e.target.checked)}/>
                        {val}
                        </label>
                        <button>Delete</button> */}
                        <List list={val} idx={i} deleteHandler={deleteHandler}/>
                    </ul>

                )
            }
            </div>
        </div>
    )
}

export default Display;