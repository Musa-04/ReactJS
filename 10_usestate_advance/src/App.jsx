import React from 'react'
import { useState } from 'react'

const App = () => {

     const [num,setNum]=useState({user:"musa",age:21})
  const btnClicked=()=>{
    console.log(num)
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
