import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { remove } from '../../features/todos/todoslice';
import { edit } from '../../features/todos/todoslice';


const Card = ({ todo }) => {
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(remove(id))

    }

    const handleEdit = (todo) => {
        dispatch(edit(todo))

    }


    return (
        <>
            <div className='p-10 my-2 relative min-h-200  overflow-scroll  font-bold  shadow-lg rounded-lg border border-black-800'>
                <h1 className='text-2xl font-semibold'>{todo.title}</h1>
                <p className='text-lg font-normal'>{todo.description}</p>
                <span className='float-end absolute top-3 right-3 flex '>
                    <button onClick={()=>handleEdit(todo)} className=' text-black text-xl hover:text-yellow-700  py-1 px-2 rounded-md'><FaEdit />
                    </button>
                    <button onClick={() => handleRemove(todo.id)} className=' text-black text-xl hover:text-red-700 py-1 px-2 rounded-md'><FaRegTrashAlt />
                    </button>
                </span>
            </div>
        </>
    )
}

export default Card
