import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'


const Cardcontainer = () => {

    const { alltodos } = useSelector((state) => state.todos)


    return (
        <>
            <div className='cardcontainer my-10 grid grid-cols-1 md:grid-cols-4 gap-5'>

                {
                    alltodos.map((todo) => <Card key={todo._id} todo={todo} />)
                }

            </div>
        </>
    )
}

export default Cardcontainer
