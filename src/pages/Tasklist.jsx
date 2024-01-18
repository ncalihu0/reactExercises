import React from 'react'
import { useState } from 'react'
import '../styles/List.css'

export default function Tasklist() {
    const [input, setinput] = useState('');
    const [todoList, settodoList] = useState([]);
    const [completedTaskCount, setCompletedTaskCount] = useState(0)

    const handleClick = () => {
        const id = todoList.length + 1;
        settodoList((prev) => [
            ...prev,
            {
                id: id,
                task: input,
                complete: false
            }
        ]);
        setinput('')
    }

    const handleDelete = (id) => {
        let list = todoList.map((task) => {
            let item = {};
            if (task.id === id) {
                if (!task.complete) {
                    setCompletedTaskCount(completedTaskCount + 1)
                }
                else {
                    setCompletedTaskCount(completedTaskCount - 1)
                }
                item = { ...task, complete: !task.complete };
            } else item = { ...task }
            return item;
        })
        settodoList(list)
    }


    return (
        <div>
            <section className='todoList'>
                <div>
                    <h2>Todo List</h2>
                    <input value={input} onInput={(e) => setinput(e.target.value)} />
                    <button onClick={() => handleClick()}>Add</button>
                    <div>
                        <div>
                            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
                        </div>
                        <div>
                            <b>Completed Tasks</b> {completedTaskCount}
                        </div>
                    </div>
                    <div>
                        <ul>
                            {todoList.map((todo) => {
                                return (
                                    <li
                                        complete={todo.complete}
                                        id={todo.id}
                                        onClick={() => handleDelete(todo.id)}
                                        style={{
                                            listStyle: "none",
                                            display: todo.complete && "none",
                                        }}
                                    >
                                        {todo.task}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
