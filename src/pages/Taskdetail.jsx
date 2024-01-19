import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [description, setDescription] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function handleDesc(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!inputValue || !description) {
            return alert('please input your todoList')
        } else {
            setTodos([...todos, [inputValue, description]])
            setInputValue('')
            setDescription('')
            console.log(todos)
        }
    }

    // function handleDelete(index) {
    //     const newTodos = [...todos]
    //     newTodos.splice(index, 1)
    //     setTodos(newTodos)
    // }

    // function handleEdit(todo) {
    //     handleDelete(todo)
    //     setInputValue(todo[0])
    //     setDescription(todo[1])
    // }
    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <input type='text' value={description} onChange={handleDesc} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
            {/* <section>
                {todos.map((todo, index) => (
                    <section className='todoTask'>
                        <h4 key={index}>{todo[0]}</h4>
                        <h5>{todo[1]}</h5>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                    </section>
                ))}
            </section> */}
        </div>
    )
}

export default TodoList;
