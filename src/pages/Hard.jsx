import React from "react";
import "../styles/Todo.css";
export default function Hard({ todos, handleDelete, handleEdit }) {
    return (
        <>
        </>
    );
}

// import React from 'react'
// import '../styles/Todo.css'
// // import Taskdetail from '../pages/Taskdetail'


// export default function Hard({ todos, setInputValue, setDescription, setTodos }) {

//     function handleDelete(index) {
//         const newTodos = [...todos]
//         newTodos.splice(index, 1)
//         setTodos(newTodos)
//     }

//     function handleEdit(todo) {
//         handleDelete(todo)
//         setInputValue(todo[0])
//         setDescription(todo[1])
//     }
//     return (
//         <>

//             <section>
//                 {todos.map((todo, index) => (
//                     <section className='todoTask'>
//                         <h4 key={index}>{todo}</h4>
//                         <h5>{todo}</h5>
//                         <button onClick={() => handleDelete(index)}>Delete</button>
//                         <button onClick={() => handleEdit(todo)}>Edit</button>
//                     </section>
//                 ))}
//             </section>
//         </>
//     )
// }
