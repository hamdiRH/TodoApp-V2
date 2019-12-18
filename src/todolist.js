import React from "react";

const todolist = props => {
  return (
    <div className="container response-content">
     
      <div className="response-title">
        <h3>Lets get some work done!</h3>
        <hr style={{ width: "100px" }} />
      </div>
      {props.todolist.map((el, i) => (
        <div className="response" key={i}>
          <div className="d-flex w-100 pt-3">
      <button className="btn btn-outline-primary mr-3" onClick={()=>{props.complete(i)}}>{el.isComplete?'Undo':"Complete"}</button>
            <button className="btn btn-outline-primary mx-3" onClick={()=>{props.removetodo(i)}}>Remove</button>
            <h4 style={{textDecoration:el.isComplete?"line-through":""}}>{el.todo}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default todolist;
