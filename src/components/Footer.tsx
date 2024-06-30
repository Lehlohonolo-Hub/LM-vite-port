import React from 'react'

function Footer() {
  return (
    <div className='w-full flex gap-5  h-screen bg-zinc-800 p-20'>
        <div className='w-1/2 h-full flex flex-col justify-between'>
            <div className='heading'>
                <h1 className='text-[8vw] uppercase font-semibold leading-none mb-5'>Eye-</h1>
                <h1 className='text-[8vw] uppercase font-semibold leading-none mb-5'>Opening</h1>
            </div>
            <h3 className='font-semibold'>LM-Dev</h3>
        </div>
        <div className='w-1/2'>
        <h1 className='text-[5vw] uppercase font-semibold leading-none mb-5'>Presentations</h1>
            <div className='socials mt-10'>
                <a className='block text-xl font-light mt-5' href='#'>Facebook</a>
                <a className='block text-xl font-light mt-5' href='#'>Instagram</a>
                <a className='block text-xl font-light mt-5' href='#'>Twitter</a>

            </div>
        </div>

    </div>
  )
}

export default Footer