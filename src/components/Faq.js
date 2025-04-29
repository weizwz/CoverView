import React from 'react'
import Header from './Header'
const Faq = () => {

  return (
    <div className='max-w-[1400px]  mx-auto'>

      <Header />

      <div className='mx-auto md:py-20'>

        <h1 className='font-bold md:text-4xl  text-2xl font-Anek text-center'>疑难解答</h1>

        <div className='flex flex-wrap justify-center mt-20 font-Inter'>
          <div className='md:w-5/12 m-4 '>
            <p className='text-xl font-bold py-2'><span className="text-blue-400">封面生成器</span> 是什么?</p>
            <p className='text-lg text-gray-700'>
            封面生成器是一个工具，能够快速帮你生成各种封面，包括不限于博客封面，社区内容封面等
            </p>
          </div>

          <div className='md:w-5/12 m-4'>
            <p className='text-xl font-bold py-2'>免费吗?</p>
            <p className='text-lg text-gray-700'>当然，完全免费使用</p>
          </div>

          <div className='md:w-5/12 m-4'>
            <p className='text-xl  font-bold py-2'>支持自定义图标吗?</p>
            <p className='text-lg text-gray-700'>
              是的，它支持 <span className='font-semibold'>高度自定义图标</span>。你可以从你本地上传图标，且它只存储于浏览器中，不会上传到服务器
            </p>
          </div>

          <div className='md:w-5/12 m-4'>
            <p className='text-xl font-bold my-2'>可以用于其他用途吗？</p>
            <p className='text-lg text-gray-700'>
              是的，在遵循法律法规的前提下，它不会限制你的用途，甚至你可以用来制作你的纪念图片和相册
            </p>
          </div>

          <div className='md:w-5/12 m-4'>
            <p className='text-xl font-bold my-2'>为什么要使用 <span className="text-blue-400">封面生成器</span>?</p>
            <p className='text-lg text-gray-700'>
              因为它简单、快速且易于使用。甚至只需要不到一分钟的时间
            </p>
          </div>

          <div className='md:w-5/12 m-4'>
            <p className='text-xl font-bold my-2'>如何支持/赞助这个项目</p>
            <p className='text-lg text-gray-700'>
              多分享给你的朋友就可以了，让更多人知道它
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Faq
