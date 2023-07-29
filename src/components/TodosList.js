import React,{useEffect, useState} from 'react'
import Todo from './Todo'

const TodosList= ()=>{
    let initTodo;
    if(localStorage.getItem("todos")===null){
        initTodo=[]
    }
    else{
        initTodo= JSON.parse(localStorage.getItem("todos"))
    }
    const [todos, updateTodos] = useState(initTodo)

    const [idIndex,updateId] = useState(todos.length+1)

    const Add= ()=>{
        const a={
            id: "item"+idIndex,
            // id: "item"+(todos.length+1),
            title: prompt('Enter Task: '),
            desc: prompt('Enter Description: ')
        }
        updateId(idIndex+1)
        let b=todos.concat(a)
        updateTodos(b)
    }
    
    const remove= (todo)=>{
        updateTodos(todos.filter((e)=>{
            return e!==todo
        }))
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

    return (
        <div className="container-fluid">
            <h2 className="text-center bg-dark text-white">Todos List</h2>
            {todos.length===0 ? <h4 className="text-center">No Todos To Display</h4> : 
            todos.map((item)=>{
                return (
                    <Todo listItem={item} remove={remove} key={item.id}/>
                )
            })}
            <button className="btn btn-success" onClick={Add}>Add New Item</button>

        </div>
    )
}

export default TodosList