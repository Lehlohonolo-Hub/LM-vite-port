import gsap, {Power2, Power4, ScrollTriger} from "gsap/all";
import React, { useEffect, useRef} from "react";


function About() {
  return (
    <div className='w-full p-20 bg-[rgb(46,255,39)] rounded-t-3xl text-black'>
        <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem animi, amet voluptas error, obcaecati tempore praesentium sequi facilis vero et laborum nemo sunt rem hic alias aperiam quam distinctio?</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#778645]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach:</h1>
                <button className='flex gap-5 items-centre px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 m-2.5 bg-zinc-100 rounded-full'></div>
                    
                </button>
                
            </div>
                <div className='w-1/2 h-[70vh] bg-[rgb(78,189,75)] rounded-2xl'></div>
        </div>

    </div>
  );
}

export default About