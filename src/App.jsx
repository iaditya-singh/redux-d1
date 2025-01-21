import React from 'react'
import Navbar from './assets/Components/Navbar'
import Form from './assets/Components/Form'
import Cardcontainer from './assets/Components/Cardcontainer'


const App = () => {
  return (
   <>
   <Navbar/>
  
    <div className=' p-10 flex flex-col' >

      <Form/>
      <Cardcontainer/>
    </div>
    

   </>
  )
}

export default App
