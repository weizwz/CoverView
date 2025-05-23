import React, { useContext, useState } from 'react'
import './CoverImage.css'
import { ImgContext } from '../utils/ImgContext'
import unsplash from '../utils/unsplashConfig'
import html2canvas from 'html2canvas'

const ComponentToImg = (props) => {
  const [loading, setLoading] = useState(false)

  const { unsplashImage } = useContext(ImgContext)
  const componentRef = React.createRef()

  async function saveImage(data) {
    const getCurrentDate = () => new Date().toISOString().split('T')[0]
    var a = document.createElement('A')
    a.href = data
    a.download = `cover-${getCurrentDate()}.png`
    document.body.appendChild(a)
    setLoading(false)
    a.click()
    document.body.removeChild(a)
  }

  const downloadImage = async () => {
    setLoading(true)

    let data = await getData(componentRef.current)
    await saveImage(data)

    if (unsplashImage) {
      unsplash.photos.trackDownload({ downloadLocation: unsplashImage.downloadLink })
    }
  }

  async function getData(element) {
    return await html2canvas(element, {
      useCORS: true,
      scale: 2,
      backgroundColor: null,
      allowTaint: true,
      height: element.offsetHeight,
      width: element.offsetWidth
    }).then((canvas) => {
      return canvas.toDataURL('image/png')
    })
  }

  return (
    <React.Fragment>
      <div ref={componentRef} className='w-full flex justify-center'>
        {props.children}
      </div>
      <button className='border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4' onClick={() => downloadImage()}>
        <span>
          {loading ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-white animate animate-spin'
              fill='currentColor'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path d='M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z'></path>
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'></path>
            </svg>
          )}
        </span>

        <span className='mx-2'>下载</span>
      </button>
    </React.Fragment>
  )
}

export default ComponentToImg
