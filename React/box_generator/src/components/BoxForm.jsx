import React from 'react';

const BoxForm = (color, size, setBoxes, boxes, setColor, setSize) => {

    const createBox = (e) => {
        e.preventDefault();
        const newBox = { color, size };
        setBoxes([...boxes, { color ,size }]);
        setColor("");
        setSize("");
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSize = (e) => {
        setSize(e.target.value);
    }

    return(
        <form onSubmit={ createBox }>
            <label htmlFor="color">Color: </label>
            <input type="text" value={ color } onChange={ handleColor }/>
            <label htmlFor="size">Size: </label>
            <input type="text" value={ size } onChange={ handleSize }/>
            <input type="submit" value="Create Box" />
        </form>
    )
}

export default BoxForm;