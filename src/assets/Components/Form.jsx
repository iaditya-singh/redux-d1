import React from 'react'
import { useSelector } from 'react-redux'

const Form = () => {

    const {alltodos}=useSelector(state=> state.todos);

    
    return (
        <>
            <form  className='items-center justify-center flex flex-col '>
                <input   className='border-2 text-xl border-gray-400 p-2 w-full rounded-md focus:outline-blue-900' type="text" placeholder='Enter Title' />
                <textarea className='text-xl border-2 p-2 border-gray-400 rounded-md my-10 w-full h-20 focus:outline-blue-900' placeholder='Enter Decription'></textarea>
                <button className='bg-yellow-300 shadow-lg  font-bold transition duration-500 w-full text-black py-2 px-10 rounded-lg hover:bg-green-700 hover:text-white'>Submit</button>
                <span className=' font-semibold text-xl mt-10 bg-gray-200 p-4 rounded-xl'>TOTAL TODO : {alltodos.length}</span>
            </form>
        </>
    )
}

export default Form
