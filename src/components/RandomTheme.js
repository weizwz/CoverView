import React from 'react'
import { PATTERNS } from '../utils/patterns'
import { COLORTHEMES } from '../utils/colorThemes'
import './RandomTheme.css'
class RandomTheme extends React.Component {
  changeTheme = () => {
    const emptyArr = [PATTERNS[0], PATTERNS[0], PATTERNS[0]]
    const patterns = [...PATTERNS, ...emptyArr]
    const indexOfColors = Math.floor(Math.random() * COLORTHEMES.length)
    const theme = COLORTHEMES[indexOfColors]

    const indexOfPattern = Math.floor(Math.random() * patterns.length)
    const pattern = patterns[indexOfPattern].value

    this.props.onThemeChange({
      ...theme,
      pattern
    })
  }

  render() {
    return (
      <div className='flex justify-center items-center p-2 cursor-pointer' title="随机主题" onClick={this.changeTheme}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='text-gray-600 hover:text-gray-700 '
          width='20'
          height='20'
          viewBox='0 0 24 24'>
          <path d='M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z'></path>
          <path d='M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z'></path>
        </svg>
      </div>
    )
  }
}
export default RandomTheme
