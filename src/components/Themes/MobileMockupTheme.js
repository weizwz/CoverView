import React, { useState } from 'react'

const MobileMockupTheme = ({ config }) => {
  const { bgColor, pattern, title, font } = config

  const [image, setImage] = useState()

  return (
    <div className={`overflow-y-hidden px-10 w-full h-full justify-center relative`} style={{ backgroundColor: bgColor }}>
      <div className={`absolute top-0 left-0 w-full h-full z-1 ${pattern} brightness-75`} />
      <div className={`${font} h-full rounded-2xl flex flex-row content-center items-center relative z-10`}>
        <h1 className={`${font} text-2xl w-1/2 md:text-4xl pl-10 text-white font-bold text-left`}>{title}</h1>

        <div className='w-[300px] mx-auto group h-full flex flex-col relative'>
          <img className='absolute top-0 left-0 w-full z-10' src='./mobile.png' alt='background' />
          {image ? (
            <div className='group relative p-10'>
              <img src={image && image} className='object-cover rounded-2xl -translate-y-1 h-full' alt='preview' />
              <button onClick={() => setImage('')} className='ml-auto mr-4 cursor-pointer'>
                <svg
                  className='group-hover:inline-block absolute top-4 right-2 bg-gray-500 hidden w-8 h-8 p-2 text-white rounded-full z-10'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className='absolute top-0 left-0 h-full w-full z-20 p-10'>
              <div className='h-full flex flex-col px-4 py-20 items-center justify-center'>
                <input
                  type='file'
                  className='w-full text-sm flex flex-col cursor-pointer mb-2 rounded border'
                  onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                />
                <span className='text-center'>上传手机截图</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileMockupTheme
