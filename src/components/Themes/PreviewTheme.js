import React, { useState } from 'react'

const PreviewTheme = ({ config }) => {
  const { bgColor, pattern, title, font } = config

  const [image, setImage] = useState()

  return (
    <div className='w-full h-full bg-white'>
      <div className={`overflow-y-hidden flex flex-col w-full h-full relative`} style={{ backgroundColor: bgColor }}>
        <div className={`absolute top-0 left-0 w-full h-full z-1 ${pattern} brightness-75`} />
        <div className={`${font} h-full rounded-2xl flex flex-col items-center relative z-10`}>
          <h1 className={`${font} text-2xl md:text-3xl pt-20 text-white font-bold`}>{title}</h1>

          <div className='w-[700px] h-full group flex flex-col relative'>
            <img className='absolute top-0 left-0 w-full z-10' src='./pc.png' alt='background' />

            {image ? (
              <div className='relative pt-[3.3rem] px-[5.1rem]'>
                <img src={image && image} className='object-cover ' alt='preview' />
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
                    className='text-l cursor-pointer mb-2 rounded border'
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                  />
                  <span className='text-center'>上传PC截图</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewTheme
