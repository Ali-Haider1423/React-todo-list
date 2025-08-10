import React, { useState } from "react";



function INPUT(props) {

    var [input, setinput] = useState("");
    function handleSub() {
        setinput("");
    };
    function handleChange(event) {
        setinput(event.target.value);
    };

    return (
        <div className="form">
            {/* to trigger different functions onSubmit we have to use a call back function and pass an event which will contain the information that onSubmit target  */}
            <form onSubmit={(event) => {
                props.handleSubmit(event);
                handleSub(event);
                event.preventDefault();
            }}>
                <input onChange={handleChange} type="text" name='todoItem' value={input} />
                <button type='Submit' ><span>Add</span></button>
            </form>
        </div >
    );

};

export default INPUT;