import React from 'react';
import {motion} from 'framer-motion';
motion
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full block rounded-3xl bg-green-800 py-10'>
      <div className='text border-t-2 border-b-2  border-zinc-300 flex whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x:"0"}} 
        animate={{x:"-100%"}} 
        transition={{repeat: Infinity ,ease:"linear", duration:10}} 
        className='text-[17vw] leading-none font-semibold uppercase pr-20 mb-[4vw] '>
        lehlohonolo
        </motion.h1>

        <motion.h1 initial={{x:"0"}} 
        animate={{x:"-100%"}} 
        transition={{repeat: Infinity ,ease:"linear", duration:10}} 
        className='text-[17vw] leading-none font-semibold uppercase pr-20 mb-[4vw] '>
        Lorem ipsum
        </motion.h1>

      </div>
    </div>
  );
}

export default Marquee