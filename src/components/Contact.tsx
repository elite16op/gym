import React from 'react'

type Props = {}

const Email = (props: Props) => {
  return (
    <div className='mt-16 w-[100%] bg'>
      <div className='w-[85%] mx-auto px-4 py-10'>
        <div className=''>
          <i className='cursor-pointer text-white text-2xl font-medium block'>About us</i>
          <div className='flex justify-between items-center'>
            <div>
            <i className='text-white cursor-pointer block mt-7'>Memberships</i>
          <i className='text-white cursor-pointer block'>Customer support</i>
          <i className='text-white cursor-pointer block'>Location</i>
            </div>
            <div>
              <svg className='' width="55px" height="55px" strokeWidth="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffff"><path d="M7.4 7H4.6a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM19.4 7h-2.8a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 14.4V9.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H1.6a.6.6 0 01-.6-.6zM23 14.4V9.6a.6.6 0 00-.6-.6h-1.8a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6h1.8a.6.6 0 00.6-.6zM8 12h8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Email