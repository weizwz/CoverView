export const FONTS = [
  {
    label: '系统字体',
    value: 'font-default',
    url: ''
  },
  {
    label: '思源宋体',
    value: 'font-syst',
    url: 'https://fontsapi.zeoseven.com/562/main/result.css'
  },
  {
    label: '思源黑体',
    value: 'font-syht',
    url: 'https://fontsapi.zeoseven.com/69/main/result.css'
  },
  {
    label: '霞鹜文楷',
    value: 'font-xwwk',
    url: 'https://fontsapi.zeoseven.com/95/main/result.css'
  }
]

class FontLoader {
  constructor() {
    this.loadedFonts = new Set()
  }

  /**
   * 动态加载字体
   * @param {string} fontFamily 字体名称
   * @param {string} fontUrl 字体的CSS文件URL
   */
  loadFont(fontFamily, fontUrl) {
    if (!fontFamily || !fontUrl) {
      return
    }
    // 检查字体是否已经加载过
    if (this.loadedFonts.has(fontFamily)) {
      return Promise.resolve()
    }
    // 创建 link 元素
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = fontUrl
    // 添加到 head 中
    document.head.appendChild(linkElement)
    // 记录已加载的字体
    this.loadedFonts.add(fontFamily)

    // 返回一个 promise，监听字体加载完成事件
    return document.fonts.ready
      .then(() => {
        console.log(`${fontFamily} 字体加载完成`)
      })
      .catch((error) => {
        console.error(`加载 ${fontFamily} 字体时出错:`, error)
      })
  }
}

export const fontLoader = new FontLoader();
