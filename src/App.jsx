import React from 'react'
import Navbar from "./components/Navbar";
import banner from "../src/assets/project-banner.jpeg";

function Project() {
  return (
    <>
      <Navbar />
      <div className='banner relative'>
        <img src={banner} alt='banner' />
        <div className='content'>
          <div className='absolute top-[120px] left-10 z-10'>
            <div className='container mx-auto py-2 px-4'>
              <span className='bg-[#0B0750]  rounded-2xl text-[14px] text-white/90 px-4 py-2'>Real Projects . Real Experience . Real Growth 🚀</span>
              <h1 className='mt-6 text-white text-5xl text-start font-bold leading-tight'>Build Real<span className='text-[#3F20B9]'> Projects.</span><br /> Boost Your Skills.</h1>
              <p className='text-white/90 text-start mt-1'>Work on Industry-level Projects, apply your Knowledge<br /> and build an impressive Portfolio</p>
              <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2 mt-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                  </svg>
                  <div className='flex flex-col items-center leading-[1.3]'>
                    <h4 className='text-[18px] text-white font-semibold'>500+</h4>
                    <p className='text-white/90'>Projects</p>
                  </div>

                </div>
                <div className='flex items-center gap-2 mt-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                  </svg>
                  <div className='flex flex-col items-center leading-[1.3]'>
                    <h4 className='text-[18px] text-white font-semibold'>20+</h4>
                    <p className='text-white/90'>Domains</p>
                  </div>

                </div>
                <div className='flex items-center gap-2 mt-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <div className='flex flex-col items-center leading-[1.3]'>
                    <h4 className='text-[18px] text-white font-semibold'>10K+</h4>
                    <p className='text-white/90'>Learners</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project