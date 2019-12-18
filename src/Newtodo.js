import React from 'react'

const Newtodo = props => {
    return (
        <div className="container request">
        <div className="col request-content">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>
            <input type="text" className="form-control input-val" placeholder="Enter new task" onChange={(e)=>{props.newtodo(e.target.value)}} value={props.todo}/>
            <button type="button" id="add-button" className="btn btn-primary" onClick={props.addnewtodo}>Add</button>
        </div>
    </div>
    )
}



export default Newtodo
