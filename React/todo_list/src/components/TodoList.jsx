import React, {useState} from 'react';
import Form from './Form';
import Display from './Display';

const TodoList = (props) => {

    const [list, setList] = useState([
        "Pokemon API",
        "Axios Pokemon API",
        "Routing Practice",
        "Luke APIwalker"
    ])

    const deleteHandler = (idx) => {
        let newList = list.filter((l, i) => i !== idx);
        setList(newList);
    }

    return (
        <div>
            <Form list={list} setList={setList} />
            <Display list={list} deleteHandler={deleteHandler}/>
        </div>
    )
}

export default TodoList;