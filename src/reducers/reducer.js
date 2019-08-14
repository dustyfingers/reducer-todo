// reducer function 
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(({ completed }) => !completed)
            };
        case 'EDIT_TODO':
            return state;
        case 'DELETE_TODO':
            return state;
        default:
            return state;
    };
};

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about pass by value vs pass by reference',
            completed: false,
            id: 2892987459
        },
        {
            item: 'Learn about actions and switch case statements',
            completed: true,
            id: 1232987589
        }
    ]
};