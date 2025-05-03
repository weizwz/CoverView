import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'

const Header = () => {
  return (
    <div className='bg-white text-xl p-4 flex  border-dashed border-b-2 border-gray-100'>
      <Link to='/' className='flex items-center'>
        <img src={logo} alt='logo' className='w-8 h-8 mr-4' />
        <h1 className='font-semibold'>封面生成器</h1>
      </Link>

      <div className='ml-auto flex items-center '>
        <Link to='/faq' className='text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4'>
          <span className='hidden md:inline-block'>使用说明</span>
        </Link>
        <a
          href='https://github.com/weizwz/CoverView'
          target='_blank'
          rel='noreferrer'
          className='bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm md:flex hidden items-center text-xs'>
          ⭐ Star on Github
        </a>
      </div>
    </div>
  )
}

export default Header
