import React from "react";

const Todo = ({ A, DelDel }) => {
    return (
        <div className="todo">
            <div className="container">
                <p>{A.text}</p>
                <p className="cat">({A.categoria})</p>
            </div>
            <div>
                <button className="Com">Completar</button>
                <button className="Del" onClick={() => DelDel(A.id)}>X</button>
            </div>
        </div>
    );
};

export default Todo;
