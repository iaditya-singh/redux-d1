import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "todos",
    initialState: {
        alltodos: [{ _id: 1, title: "ur title here", description: "ur description here" },
            {_id:2,title:"second title",description:"ur second description here"},
        ],
        edit: {
            isEdit: false,
            todo: {}
        }
    },
    reducer:{}
})

export default todoslice.reducer;