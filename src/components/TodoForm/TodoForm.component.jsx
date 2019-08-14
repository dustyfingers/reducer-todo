import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../../reducers/reducer';
import './TodoForm.styles.sass';


const TodoForm = () => {
    const [input, setInput] = useState('');
    const [{ todos }, dispatch] = useReducer(reducer, initialState);

    const addTodo = (evt, todo) => {
        evt.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
        console.log('addTodo called!');
    }

    const toggleComplete = (evt, todo) => {
        evt.preventDefault();
        dispatch({ type: 'TOGGLE_COMPLETE', payload: todo });
    }

    const clearCompleted = evt => {
        evt.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: true })
    }

    return (
        <div>
            <input type="text" value={input} onChange={evt => setInput(evt.target.value)} />
            <button onClick={evt => addTodo(evt, input)}>ADD TODO</button>
            <div>
                {todos.map(todo =>
                    <div
                        key={todo.id}
                        onClick={evt => toggleComplete(evt, todo)}
                        className={`${todo.completed ? 'completed' : 'not-completed'} todo`}>
                        <p key={todo.id} >{todo.item}</p>
                    </div>
                )}
            </div>
            <button onClick={evt => clearCompleted(evt)}>CLEAR COMPLETED TODOS</button>
        </div>
    )
}

export default TodoForm;
