import React from 'react'
import { useReducer } from 'react'
import '../styles/Counter.css'

export default function Counter() {
    const counting = { count: 0 }
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, counting)

    return (
        <div className='counter'>
            Count: {state.count}
            <section className='buttons'>
                <button onClick={() => dispatch({ type: 'decrement' })} className='button-27'>-</button>
                <button onClick={() => dispatch({ type: 'increment' })} className='button-27'>+</button>
            </section>
        </div>
    )
}