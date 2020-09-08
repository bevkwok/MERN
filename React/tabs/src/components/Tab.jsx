import React, { useState } from 'react';

const Tab = (props) => {
    const tabList = [
        {label: "Apple", content: "Apple is a fruit."},
        {label: "Banana", content: "Banana is a yellow fruit."},
        {label: "Chocolate", content: "Chocolate is a snack."},
        {label: "Juice", content: "Juice is a drink."}
    ];

    const onClickHandler = (e, value) => {
        alert (value)
        return (
            <div>
                <h3>value</h3>
            </div>
        )
    }

    return (
        <div>
            {
                tabList.map( (item, i) =>
                    <button key={i} onClick={ (e) => onClickHandler(e, item.content) }>{ item.label }</button>
                )
            }
        </div>
    )
}

export default Tab;