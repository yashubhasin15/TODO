import React from 'react'

const Todo= ({listItem,remove})=>{
    return (
        <div className="d-flex justify-content-between mb-2 bg-primary border border-dark" id={listItem.id}>
            <div className="text-wrap">
                <h3 className="p-2">{listItem.title}</h3>
                <span className="p-2">{listItem.desc}</span>
            </div>
            <button className="btn btn-danger align-self-end" onClick={()=>{remove(listItem)}}>Delete</button>
        </div>
    )
}

export default Todo