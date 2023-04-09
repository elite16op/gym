import React from 'react'

type Props = {
    name : string,
    difficulty : string,
    description : string,
}

const Exercise = (props: Props) => {
  return (
    <div className='w-[300px] boutline px-4 py-5 rounded my-5 lg:my-3 mx-auto'>
        <i className='color text-lg font-medium block'>{props.name}</i>
        <div className='px-2 py-1 inline-block bg rounded my-1'>
            <i className='text-sm block text-white'>{props.difficulty}</i>
        </div>
        <i className='text-sm block'>Instructions : {props.description.slice(0,30)}</i>
    </div>
  )
}

export default Exercise