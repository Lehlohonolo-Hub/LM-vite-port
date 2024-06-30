import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center  px-32 gap-5'>
        <div className='cardContainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
                <img src='images/xbox.jpg'
                alt='lmLogo' />
                <button className='absolute left-10 bottom-10 px-[5%] py-[1%] border-2 rounded-full '>heeey</button>
            </div>
        </div>
        <div className='cardContainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#004D43]'>
                <img src='images/xbox.jpg'
                alt='lmLogo' />
                <button className='absolute left-10 bottom-10 px-[5%] py-[1%] border-2 rounded-full '>heeey</button>
            </div>
            <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#004D43]'>
                <img src='images/xbox.jpg'
                alt='lmLogo' />
                <button className='absolute left-10 bottom-10 px-[5%] py-[1%] border-2 rounded-full '>heeey</button>
            </div>
        </div>
    </div>
  )
}

export default Cards