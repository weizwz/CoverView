import React from 'react'

const BasicTheme = ({ config }) => {
  const { title, bgColor, pattern, author, icon, font, customIcon } = config

  return (
    <div
      className={`overflow-y-hidden flex  text-gray-800 items-center h-full ${pattern} `}
      style={{ backgroundColor: bgColor }}>
      <div className={`${font} bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl`}>
        <div className='px-12'>
          <div>
            <h1 className='text-3xl md:text-5xl text-gray-800 font-bold text-center'>{title}</h1>
          </div>
        </div>

        <div className='flex p-4 px-12 rounded-xl items-center bg-white'>
          {customIcon ? (
            <div className='w-12 h-12'>
              <img src={customIcon} alt='img' className='rounded-full bg-white p-1 border-white' />
            </div>
          ) : (
            <div className='mr-auto ml-2 items-center justify-center flex'>
              <img className='w-8 h-8' src={`https://api.iconify.design/simple-icons/${icon.value}.svg`} alt={`${icon.label} icon`} />
            </div>
          )}

          <h2 className='text-xl ml-auto mr-2 font-semibold'>{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default BasicTheme
