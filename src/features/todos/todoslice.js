import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "todos",
    initialState: {
        alltodos: [
        ],
        edit: {
            isEdit: false,
            todo: {}
        }
    },
    reducers: {
        //addtodo
        add: (state, action) => {
            return {
                ...state,
                alltodos: [action.payload, ...state.alltodos],
            };
        },
        remove: (state, action) => {
            return {
                ...state,
                alltodos: state.alltodos.filter((todo) => todo.id !== action.payload)

            }
        },
        update: (state, action) => {
            return {
                ...state,
                alltodos: state.alltodos.map(todo => todo.id === action.payload.id ? action.payload : todo),
                edit: {
                    todo: {},
                    isEdit: false,
                }
            }
        },
        edit: (state, action) => {

            return {
                ...state,
                edit: { todo: action.payload, isEdit: true }
            }

        },
    }
})

export const { add, remove, update, edit } = todoslice.actions;

export default todoslice.reducer