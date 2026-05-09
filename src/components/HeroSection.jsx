import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide font-semibold'>
            <span className='bg-gradient-to-r from-red-700 to-blue-600 text-transparent bg-clip-text'>VCODER</span> build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold'>
                {" "}for developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className='mt-10 flex justify-center'>
        <a href="#" className='px-3 py-3 rounded-md bg-gradient-to-r from-red-700 to-red-950 mx-5'>Start for Free</a>
        <a href="#" className='px-3 py-3 rounded-md bg-gradient-to-r from-blue-700 to-blue-950 mx-5'>Documentation</a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-full max-w-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'>
            <source src={video1} type='video/mp4'/>
            Your browswer does not support videos
        </video>
        <video autoPlay loop muted className='rounded-lg w-full max-w-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'>
            <source src={video2} type='video/mp4'/>
            Your browswer does not support videos
        </video>

      </div>
    </div>
  )
}

export default HeroSection
