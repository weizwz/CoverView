import React, { useState } from 'react'

const UnsplashImage = ({ src, alt, onClick }) => {
  // 使用一个状态变量来跟踪图片是否已经加载完毕
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='relative w-full h-full'>
      {!isLoaded && (
        <div className='absolute inset-0 flex items-center justify-center h-full px-4'>
          <svg
            className='animate-spin h-5 w-5 text-blue-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' stroke='currentColor' strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
          </svg>
        </div>
      )}

      {/* 图片 */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)} // 当图片加载完成时设置 isLoaded 为 true
        onClick={onClick} // 点击图片时调用传入的 onClick 函数
        className='rounded-lg object-cover h-full w-full'
      />
    </div>
  )
}

export default UnsplashImage
