import { switchCase } from "@babel/types";

// reducer function 
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                name: action.payload
            };
        case 'EDIT_TODO':
            return state;
        case 'DELETE_TODO':
            return state;
        default:
            return state;
    };
};

const state = {
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