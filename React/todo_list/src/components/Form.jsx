import React, {useState} from 'react';

const Form = ({list, setList}) => {

    const [todoList, setToDoList] = useState("");

    


    const submitForm = (e) => {
        e.preventDefault();
        
        setList([...list, todoList]);

        setToDoList("");
    }

    const listHandler = (e) => {
        setToDoList(e.target.value);
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <label>To Do List: </label>
                <input type="text" value={todoList} onChange={listHandler}/>
                <input type="submit" value="Add ToDo List"/>
            </form>
        </div>
    )
}

export default Form;