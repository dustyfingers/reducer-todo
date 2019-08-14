import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm/TodoForm.component';

const App = () => {
  return (
    <div className="App">
      <div>
        <h2>Todo App</h2>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
