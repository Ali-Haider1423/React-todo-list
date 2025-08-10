import React from "react";

function INPUT(props) {
    return (
        <div className="form">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name='todoItem' />
                <button type='Submit'><span>Add</span></button>
            </form>
        </div>
    );
};

export default INPUT;