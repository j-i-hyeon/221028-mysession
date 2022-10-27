import { createStore } from "redux";

//초기 state 지정
export const INITIAL_STATE = {todos : []};

//action 정의
export function AddTodo(content){
    return{
        type:'ADD',
        content
    }
}
export function DeleteTodo(id) {
    return {
        type: 'DELETE',
        id
    }
}
export function UpdateTodo(id, content){
    return{
        type: 'UPDATE',
        id,
        content
    }
}

//reducer 정의
export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD' :
            return {
                ...state,
                todos: [...state.todos, action.content]
            };
        case 'DELETE' :
            return {
                ...state,
                todos: state.todos.filter((data, index) => index !== action.id)
            }
        case 'UPDATE' :
            return{
                ...state,
                todos: state.todos.map((data, index) => {
                    if (index === action.id) {
                        return action.content;
                    }else return data;
                })
            }
        default:
            return state;
    
    }
}

export const store = createStore(Reducer);
export default store;