
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../features/todos/todoslice'
import { useEffect, useState } from 'react';
import { update } from '../../features/todos/todoslice';


const Form = () => {
    const dispatch = useDispatch();

    const { edit } = useSelector(state => state.todos);

    const { alltodos } = useSelector(state => state.todos)


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    console.log(title, description)
    const handleSubmit = (e) => {
        e.preventDefault();

        !edit.isEdit ? dispatch(add({ id: crypto.randomUUID(), title, description })) : dispatch(update({ id: edit.todo.id, title, description }))

        setTitle("");
        setDescription("");

    }



    useEffect(() => {
        setTitle(edit.todo.title);
        setDescription(edit.todo.description);

    }, [edit]);



    return (
        <>
            <form onSubmit={handleSubmit} className='items-center justify-center flex flex-col '>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='border-2 text-xl border-gray-400 p-2 w-full rounded-md focus:outline-blue-900' type="text" placeholder='Enter Title' />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='text-xl border-2 p-2 border-gray-400 rounded-md my-10 w-full h-20 focus:outline-blue-900' placeholder='Enter Decription'></textarea>
                <button className='bg-yellow-300 shadow-lg  font-bold transition duration-500 w-full text-black py-2 px-10 rounded-lg hover:bg-green-700 hover:text-white'>Submit</button>
                <span className=' font-semibold text-xl mt-10 bg-gray-200 p-4 rounded-xl'>TOTAL TODO :{alltodos.length}</span>
            </form>
        </>
    )
}

export default Form
