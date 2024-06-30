import React from 'react'

function Navbar() {
  return (
  <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
    <div className='logo'>
      <img src="/images/logo.png" 
      alt="logo"
      width={50}
      height={100}
      />
    </div>

    <div className='links flex gap-10'>
      {["Services", "Our work", "About us", "insights", "Contact"].map((item, index)=>(
      <a key={index} className={`text-lg capitalize font-light ${index=== 4 && "ml-32"}`}>{item}</a>
      ))}
    </div>
        
  </div>
  )
}

// dnt 4 get to include Logo



export default Navbar