import React, { useState } from "react";
import '../App.css';

function ITEMS(props) {

    return (
        <div>
            <ul>
                {props.propItems.map((item, index) => {
                    return <li style={{ cursor: "pointer" }} onClick={() => props.checked(index)} key={index}> {item} </li>
                })}
            </ul>
        </div>
    );

};

export default ITEMS;