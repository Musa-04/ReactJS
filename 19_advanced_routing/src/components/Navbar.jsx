import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold ' >Musa</h2>
      <div className='flex gap-10'>
        <a className='text-lg font-medium '  href="/">Home</a>
        <a className='text-lg font-medium '  href="/About">About</a>
        <a className='text-lg font-medium'  href="/product">Product</a>

      </div>
    </div>
  )
}

export default Navbar
