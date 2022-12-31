import React from 'react'
import Spline from '@splinetool/react-spline';
import PC from './desktop-regular-24.png';
import { MdOutlineDesktopMac } from 'react-icons/md';
import { SiSpacemacs } from 'react-icons/si';
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className="Hero  w-full h-[100vh] bg-gradient-to-r from-[#130b27] to-[#310247] ">

    
        <div className="Content p-9  text-white font-mono relative z-3 flex flex-col gap-[60px] p-[4em] max-w-[800px]">        
        <h1 className='text-[70px] font-bold'>The Future of Collaboration </h1>
            <p className='text-[18px] font-bold'>
              Bring your team together and build your community by using our
              cross-platform app that lets you collaborate via chat, voice and by
              sharing and storing unlimited media files. A world of topics is
              waiting for you. Join the private beta.
            </p>
            <button className= ' relative z-30 btn flex px-[60px] py-[12px] border rad rounded-[16px] border-[2px] max-w-[280px] backdrop-blur-[10px] justify-center align-center gap-4 font-bold text-white '>
          <Image 
          src={PC} alt="PC" /> Get Started
        </button>

        </div>
        <div className="">
        <Spline className='spline' scene="https://prod.spline.design/567hzG7VPMVy368M/scene.splinecode" />
        </div>
        </div>
         
    </>
  )
};

export default Hero;