import React, { useState, useEffect, useContext } from 'react'
import unsplash from '../utils/unsplashConfig'
import { ImgContext } from '../utils/ImgContext'
import UnsplashImage from './UnsplashImage'

const UnsplashSearch = ({ largeImgPreview }) => {
  const [imageList, setImageList] = useState([])
  const { param, setParam, setUnsplashImage } = useContext(ImgContext)
  const [text, setText] = useState(param.query)

  const selectImage = (image) => {
    setUnsplashImage({
      searchText: param.query,
      url: image.urls.regular,
      downloadLink: image.links.download_location
    })
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (param.query === '') {
      return
    }
    unsplash.search.getPhotos(param).then((response) => {
      setImageList(response.response.results)
    })
  }, [param])

  return (
    <div className='w-full h-full p-4 flex flex-col bg-white items-center justify-center'>
      <div className='w-full flex items-center mb-4'>
        <form
          onSubmit={(e) => handleSearchSubmit(e)}
          className=' mx-auto w-full flex bg-gray-50 rounded-full border border-gray-50'>
          <input
            type='text'
            value={text}
            placeholder='请输入搜索关键词'
            className='focus:outline-none w-full text-lg bg-gray-50 p-1 px-4  rounded-full'
            onChange={(e) => setText(e.target.value)}
          />

          <button type='submit' onClick={() => setParam({ ...param, query: text, page: 1 })}>
            <svg
              className='w-9 h-9 ml-auto p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </button>
        </form>
      </div>

      <div className={`overflow-y-auto overflow-x-hidden rounded-lg mb-4`} style={{ height: 'calc(100% - 54px)' }}>
        <div className={`grid gap-4 ${largeImgPreview ? 'grid-cols-4' : 'grid-cols-3'}`}>
          {imageList.map((image) => {
            return (
              <div
                key={image.id}
                className={`rounded-lg relative cursor-pointer w-full ${largeImgPreview ? 'h-32' : 'h-20'}`}>
                <span className='font-Inter top-2 left-2 absolute z-10 text-sm font-semibold text-white opacity-50'>
                  点击选择此照片
                </span>
                <UnsplashImage src={image.urls.regular} alt={image.alt_description} onClick={() => selectImage(image)} />
              </div>
            )
          })}
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <button
          className={` bg-blue-400 hover:bg-blue-500 text-white rounded-lg text-base p-1 px-4 mx-auto border-none mr-4 disabled:bg-blue-200`}
          disabled={param.page === 1}
          onClick={() => {
            setParam({ ...param, page: 1 })
          }}>
          首页
        </button>
        <button
          className={` bg-blue-400 hover:bg-blue-500 text-white rounded-lg text-base p-1 px-4 mx-auto border-none mr-4 disabled:bg-blue-200`}
          disabled={param.page === 1}
          onClick={() => {
            setParam({ ...param, page: param.page > 1 ? param.page - 1 : 1 })
          }}>
          上一页
        </button>
        <button
          className=' bg-blue-400 hover:bg-blue-500 text-white rounded-lg text-base p-1 px-4 mx-auto border'
          onClick={() => {
            setParam({ ...param, page: param.page + 1 })
          }}>
          下一页
        </button>
      </div>
    </div>
  )
}

export default UnsplashSearch
