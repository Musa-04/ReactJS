import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('form submitted ....')

  }
 
  return (
    <div className='h-screen bg-black  text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }}  className=' flex items-start justify-between   p-10  '>
    <div className='flex gap-4 flex-col w-1/2 items-start '>
          <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 py-2 font-medium w-full border-2 outline-none rounded ' 
        />
        <textarea type="text" 
        className='px-5 py-2 h-32 w-full border-2 font-medium outline-none rounded  '
         placeholder='Write Details' 

        />
        <button className='bg-white w-full font-medium outline-none text-black px-5 py-2 rounded '>Add Notes</button>
    </div>
      </form>
    </div>
  )
}

export default App
