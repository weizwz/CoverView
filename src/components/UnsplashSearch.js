import React, { useState, useEffect, useContext } from 'react'
import unsplash from '../utils/unsplashConfig'
import { ImgContext } from '../utils/ImgContext'

const UnsplashSearch = ({ largeImgPreview }) => {
  const [imageList, setImageList] = useState([])
  const { searchText, setSearchText, setUnsplashImage } = useContext(ImgContext)

  const searchImages = () => {
    unsplash.search
      .getPhotos({
        query: searchText,
        page: 1,
        per_page: 12
        // orientation:'portrait'
      })
      .then((response) => {
        setImageList(response.response.results)
      })
  }

  const selectImage = (image) => {
    setUnsplashImage({
      searchText: searchText,
      url: image.urls.regular,
      downloadLink: image.links.download_location
    })
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    searchImages(searchText)
  }

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: searchText,
        page: 1,
        per_page: 12
      })
      .then((response) => {
        setImageList(response.response.results)
      })
  }, [searchText])

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-col bg-white items-center justify-center'>
        <div className='w-full flex items-center'>
          <form
            onSubmit={(e) => handleSearchSubmit(e)}
            className=' mx-auto w-full flex bg-gray-50 rounded-full border border-gray-50 mb-4'>
            <input
              type='text'
              value={searchText}
              placeholder='Search photos'
              className='focus:outline-none w-full text-lg bg-gray-50 p-1 px-4  rounded-full'
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button type='submit' onClick={() => searchImages(searchText)}>
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

        <div className={`overflow-y-scroll overflow-x-hidden grid gap-4 ${largeImgPreview ? 'grid-cols-3' : 'grid-cols-2'}`} style={{ height: 'calc(100% - 54px)' }}>
          {imageList.map((image) => {
            return (
              <div
                key={image.id}
                className={`rounded-lg relative cursor-pointer w-full h-44`}>
                <span className='font-Inter top-2 left-2 absolute text-sm font-semibold text-white opacity-50 '>
                  Click to Select
                </span>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  onClick={() => selectImage(image)}
                  className='rounded-lg object-cover h-full w-full'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UnsplashSearch
