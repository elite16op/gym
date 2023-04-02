import React from 'react'
import gif from "../assets/bro.png"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-[85%] mx-auto px-4'>
        <div className='lg:flex lg:justify-between hero'>
            <div className='text-left lg:w-[45%]'>
                <i className='text-5xl color font-bold block'>SweatLab</i>
                <i className='text-xl block'>evolutionary fitness</i>
                <i className='w-[90%] inline-block mt-4 text-[0.92rem] lg:mt-8 lg:text-base'>Welcome to our state-of-the-art gym, where fitness meets innovation, provide you with an exhilarating workout experience. </i>
                <div className='flex gap-x-4 mt-4 lg:mt-8'>
                    <button className='border border-black px-2 py-1 rounded-md btn font'>Join now</button>
                    <button className='border border-black px-2 py-1 rounded-md color font'>Learn more</button>
                </div>
            </div>
            <div className='mt-7'>
                <img src={gif} alt="" className='mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default Hero