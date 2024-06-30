import React, { useEffect, useRef, useState } from 'react';
import gsap , {Power4, ScrollTrigger} from 'gsap/all';

function Eyes() {

  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      setRotate(angle-180);
    })
  })

//vid 2:39min scroll thing on background
// to include background img from ochi website vid 1:25min

  return (
    <div className='eyes  w-full overflow-hidden  '>
      <div data-scroll data-scroll-speed=".-7" className=' h-full w-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" '>
             
          <img className='w-full'
            src="/images/Spider.jpeg"
            alt="background eye img"
          />
          
          <div className='absolute flex items-left bg-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 h-[20vw] bg-red-500 items-center justify-center rounded-2xl'>

          <div className='  flex items-center justify-center m-[2.5vw] w-[15vw] h-[15vw] rounded-full  bg-green-300 '>
            <div className=' relative items-center justify-center w-2/3 h-2/3 rounded-full  bg-black '>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 '>
                <div className=' w-[5vh] h-[5vh] rounded-full bg-white '></div>

              </div>
          </div>

          </div>
          
          <div className=' flex items-center justify-center m-[2.5vw] w-[15vw] h-[15vw] rounded-full bg-green-300 '>
            <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full  bg-black '>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 '>
                <div className=' w-[5vh] h-[5vh] rounded-full bg-white '></div>

              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    
  )
}

export default Eyes