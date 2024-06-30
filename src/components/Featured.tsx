import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-6xl tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-20 mt-10'>
                <div className='cardContainer relative w-1/2 h-[75vh] bg-red-500 '>
                    <h1 className='absolute left-full mx-10 -translate-x-1/2 top-1/2 translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter text-[rgb(46,255,39)]'>FYDE</h1>
                    <div className='card w-full h-full rounded-xl bg-green-400 overflow-hidden'>
                        <img className='w-full h-full bg-cover ' src='/images/xbox.jpg' alt='' />
                    </div>
                </div>
                <div className='cardContainer relative w-1/2 h-[75vh]  bg-red-500 '>
                    <h1 className='absolute right-full mx-10 translate-x-1/2 top-1/2 translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter text-[rgb(46,255,39)]'>WOPE</h1>
                    <div className='card w-full h-full rounded-xl bg-green-400 overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='/images/xbox.jpg' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured