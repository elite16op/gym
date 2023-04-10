import React from 'react'

type Props = {
    name : string,
    videoUrl : string,
    thumbnailUrl : string
}

const Course = (props: Props) => {
  return (
    <div className='w-[300px] h-fit boutline rounded my-5 lg:my-3 mx-auto'>
        <div className=''>
            <img src={props.thumbnailUrl} alt="" className='w-[100%]' />
        </div>
        <div className='my-4 px-4'>
            <i className='not-italic font-medium'>
                <a href={props.videoUrl}>{props.name}</a>
            </i>
        </div>
    </div>
  )
}


export default Course;