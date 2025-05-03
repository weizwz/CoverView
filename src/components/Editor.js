import React from 'react'
import CoverImage from './CoverImage'
import ComponentToImg from './ComponentToImg'
import IconSelect, { defaultIcon } from './IconSelect'
import RandomTheme from './RandomTheme'
import { ImgProvider } from '../utils/ImgContext'
import Header from './Header'

import { THEMES } from '../utils/constants'
import { FONTS, fontLoader } from '../utils/fonts'
import { PATTERNS } from '../utils/patterns'
import { COLORTHEMES } from '../utils/colorThemes'

const defaultSettings = {
  title: '免费、快速的封面生成器',
  bgColor: COLORTHEMES[0].bgColor,
  pattern: '',
  download: 'PNG',
  author: '唯知笔记',
  icon: defaultIcon,
  font: FONTS[0].value,
  theme: THEMES[0].label,
  customIcon: '',
  platform: 'hashnode'
}

class Editor extends React.Component {
  state = defaultSettings

  // 默认加载
  componentDidMount() {
    fontLoader.loadFont(FONTS[0].label, FONTS[0].url)
  }

  handleReset = () => {
    this.setState({
      ...defaultSettings,
      // 标题、作者、图标、主题等不用重置
      title: this.state.title,
      author: this.state.author,
      icon: this.state.icon,
      theme: this.state.theme,
      platform: this.state.platform,
    })
  }

  getRandomTheme = (settings) => {
    this.setState({ ...settings })
  }

  // 监听字体变化
  componentDidUpdate(prevProps, prevState) {
    // 检查 state 中的 font 是否发生了变化
    if (prevState.font !== this.state.font) {
      const { font } = this.state
      const selectedFont = FONTS.find((item) => item.value === font)
      fontLoader.loadFont(selectedFont.label, selectedFont.url)
    }
  }

  render() {
    return (
      <div className='md:max-w-[1440px] mx-auto'>
        <Header />

        <ImgProvider>
          <div className='flex md:flex-row flex-col'>
            <div className='flex-none h-main bg-white flex flex-col md:w-3/12 md:border-dashed md:border-r-2 border-gray-100'>
              <div>
                <div className='flex md:flex-row flex-col'>
                  <div className='bg-white font-Inter w-full p-2'>
                    <div>
                      <div className='m-2 flex flex-col'>
                        <span className='font-medium text-sm pb-1'>标题</span>
                        <textarea
                          type='text'
                          value={this.state.title}
                          placeholder='请输入标题'
                          className='focus:outline-none border text-gray-700 text-lg  rounded p-2 h-24'
                          onChange={(e) => this.setState({ title: e.target.value })}
                        />
                      </div>

                      <div className='flex flex-col m-2 '>
                        <span className='font-medium text-sm pb-1'>作者</span>
                        <input
                          type='text'
                          value={this.state.author}
                          placeholder='请输入作者'
                          className='focus:outline-none border text-gray-700 text-lg rounded bg-white p-2'
                          onChange={(e) => this.setState({ author: e.target.value })}></input>
                      </div>

                      <div className='flex flex-col m-2 '>
                        <span className='font-medium text-sm pb-1'>图标</span>
                        <IconSelect onChange={(selectedOption) => this.setState({ icon: selectedOption })} />
                      </div>
                      <div className='w-full'>
                        {this.state.icon.label === 'upload your own' ? (
                          <div className='flex items-center justify-center w-64 mx-auto'>
                            <input
                              type='file'
                              className='focus:outline-none w-full text-sm cursor-pointer bg-white rounded border'
                              onChange={(e) => this.setState({ customIcon: URL.createObjectURL(e.target.files[0]) })}
                            />
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>

                      <div className='flex items-center'>
                        <div className='flex flex-col m-2 w-1/2'>
                          <span className='font-medium text-sm pb-1'>字体</span>
                          <select
                            value={this.state.font}
                            onChange={(e) => this.setState({ font: e.target.value })}
                            className='focus:outline-none text-gray-700 text-lg p-2 rounded border'>
                            {FONTS.map((font) => (
                              <option key={font.value} value={font.value}>
                                {font.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className='flex flex-col m-2 w-1/2'>
                          <span className='font-medium text-sm pb-1'>背景色</span>
                          <div className='border rounded flex items-center p-1'>
                            {/* <span className="text-base text-gray-700  mx-2">{this.state.bgColor}</span> */}
                            <input
                              type='color'
                              value={this.state.bgColor}
                              onChange={(e) => this.setState({ bgColor: e.target.value })}
                              className='h-8 w-full  rounded'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='flex items-center'>
                        <div className='flex flex-col m-2 w-1/2'>
                          <span className='font-medium text-sm pb-1'>纹理</span>
                          <select
                            onChange={(e) => this.setState({ pattern: e.target.value })}
                            className='focus:outline-none border text-lg p-2 rounded'
                            value={this.state.pattern}>
                            {PATTERNS.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className='flex flex-col m-2 w-full'>
                          <span className='font-medium text-sm pb-1'>尺寸</span>

                          <select
                            onChange={(e) => this.setState({ platform: e.target.value })}
                            value={this.state.platform}
                            className='focus:outline-none text-gray-700 text-lg p-2 rounded border'>
                            <option>hashnode</option>
                            <option>dev</option>
                          </select>
                        </div>
                      </div>

                      <button
                        className='flex items-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg mt-6 text-base  p-1 px-4 mx-auto border'
                        onClick={this.handleReset}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-white mr-2 ' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z'></path>
                          <path d='M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z'></path>
                        </svg>
                        <span className='font-Inter'>重置</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mx-4 my-1">
								<h6>Download As</h6>
								<select onChange={(e) => this.setState({ download: e.target.value })}
									className="form-control input"
									value={this.state.download}>
									<option>PNG</option>
									<option>JPEG</option>
								</select>
							</div> */}
            </div>

            <div className='h-main flex flex-1 px-8 flex-col items-center bg-gray-50'>
              <h2 className='text-lg p-2 font-semibold'>封面预览</h2>
              <ComponentToImg downloadAs={this.state.download}>
                <CoverImage {...this.state} />
              </ComponentToImg>
            </div>

            {/* themes section */}

            <div className='h-main p-4 md:border-dashed md:border-l-2 border-gray-100 bg-white'>
              <div className='h-full w-full'>
                <div className='w-full flex justify-between items-center'>
                  <h2 className='text-lg p-2 font-semibold'>主题</h2>
                  <RandomTheme onThemeChange={this.getRandomTheme} />
                </div>

                <div className='h-theme flex gap-2 flex-wrap justify-center overflow-y-scroll'>
                  {THEMES.map((themePlaceholder) => (
                    <div
                      className={`${
                        themePlaceholder.label === this.state.theme ? 'border-blue-400 ' : ''
                      }p-1 overflow-hidden rounded-lg cursor-pointer border-2 hover:border-blue-400 duration-100`}
                      key={themePlaceholder.label}>
                      <img src={themePlaceholder.preview} alt={themePlaceholder.label} onClick={(e) => this.setState({ theme: themePlaceholder.label })} />
                      <div className='text-sm text-center text-gray-600 whitespace-nowrap'>{themePlaceholder.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ImgProvider>
      </div>
    )
  }
}

export default Editor
