import React,{useState} from 'react';
const List = ({list, idx, deleteHandler}) => {

    const [selectList, setselectList] = useState(list[0]);
    const [isDone, setisDone] = useState(false);


    let btnHandler = (e) => {
        console.log(list);
    }

    return (
        <div>
            <p>
                <input type="checkbox" checked={isDone} onChange={e => setisDone(e.target.checked)} />
                {list} 
                <button onClick={(e) => {deleteHandler(idx)}}>Delete</button> 
            </p>
            
        </div>
    )
}

export default List;