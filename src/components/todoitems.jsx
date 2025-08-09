import React from "react";
import '../App.css';

function ITEMS(props) {
    
    return (
        <div>
            <ul>
                {props.propItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
};

export default ITEMS;