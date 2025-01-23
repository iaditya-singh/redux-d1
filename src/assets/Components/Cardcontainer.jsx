import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'


const Cardcontainer = () => {

    const { alltodos } = useSelector(state => state.todos)

    if (alltodos.length === 0) {


        return (
            <h1 className='text-3xl text-gray-400 text-center my-12' >No Todos yet...</h1>)
    }


    return (
        <>
            <div className='cardcontainer my-10 grid grid-cols-1 md:grid-cols-4 gap-5'>

                {alltodos.map((todo) => <Card key={todo._id} todo={todo} />)}

            </div>
        </>
    )
}

export default Cardcontainer;
