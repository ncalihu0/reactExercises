import React from 'react'
import { useState } from 'react'
import '../styles/List.css'

function Tasklist() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(['']);

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

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const handleEdit = (todo) => {
        handleDelete(todos.indexOf(todo));
        setInputValue(todo[0]);
        setDescription(todo[1]);
    };
    const handleComplete = (index) => {
        if (completed.includes(index)) {
            setCompleted(completed.filter((i) => i !== index));
        } else {
            setCompleted([...completed, index]);
        }
    }

    return (
        <div>
            <form className='addTask'>
                <h1>Todo List</h1>
                <label htmlFor='title'>Title</label>
                <input type='text' value={inputValue} onChange={handleChange} name='title' id='title' />
                <label htmlFor='description'>Description</label>
                <input type='text' value={description} onChange={handleDesc} name='Description' id='Description' />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>

            <section className='taskGrid'>
                {todos.map((todo, index) => (
                    <section key={index} className={`todoTask ${completed.includes(index) ? 'completed' : ''}`}>
                        <h4>Title {index}: {todo[0]}</h4>
                        <h5>Description: {todo[1]}</h5>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                        <button onClick={() => handleComplete(index)}>Completed</button>
                    </section>
                ))}
            </section>
        </div>
    )
}

export default Tasklist;

// import React from 'react'
// import { useState } from 'react'

// function TodoList() {
//     const [todos, setTodos] = useState([])
//     const [inputValue, setInputValue] = useState('')
//     const [description, setDescription] = useState('')

//     function handleChange(e) {
//         setInputValue(e.target.value)
//     }
//     function handleDesc(e) {
//         setDescription(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         if (!inputValue || !description) {
//             return alert('please input your todoList')
//         } else {
//             setTodos([...todos, [inputValue, description]])
//             setInputValue('')
//             setDescription('')
//             console.log(todos)
//         }
//     }


//     return (
//         <div>
//             <h1>Todo List</h1>
//             <form>
//                 <input type='text' value={inputValue} onChange={handleChange} />
//                 <input type='text' value={description} onChange={handleDesc} />
//                 <button onClick={handleSubmit}>Add Todo</button>
//             </form>
//         </div>
//     )
// }

// export default TodoList;