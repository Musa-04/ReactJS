import React from 'react'
import { useState } from 'react'

const App = () => {

     const [num,setNum]=useState({user:"Rishi",age:20})
  const btnClicked=()=>{
   setNum(prev=>({...prev,age:21}))
   setNum(prev=>({...prev,user:'musa'}))

  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
