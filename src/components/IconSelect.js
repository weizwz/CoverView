import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { FixedSizeList as List } from 'react-window'

// 设置Iconify API的URL
const iconifyAPI = process.env.REACT_APP_API_ICONIFY_URL

export const defaultIcon = { label: 'xiaohongshu', value: 'xiaohongshu' }

// 自定义 Option 渲染组件
const CustomOption = ({ data, isDisabled, isFocused, isSelected, innerRef, innerProps }) => {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className='p-2'
      style={{
        backgroundColor: isFocused ? '#4CA2FF' : isSelected ? '#4CA2FF' : '',
        color: isFocused ? 'white' : isSelected ? 'white' : '',
      }}>
      <div className='flex items-center'>
        <span className='mr-2'>{data.label}</span>
        <div className='ml-auto mr-2'>
          <img loading='lazy' width={24} height={24} src={`https://api.iconify.design/simple-icons/${data.value}.svg`} alt={`${data.label} icon`} />
        </div>
      </div>
    </div>
  )
}

// 自定义 MenuList 渲染组件，使用 react-window 虚拟化
const MenuList = ({ options, children, maxHeight, getValue }) => {
  const [value] = getValue()
  const initialOffset = options.indexOf(value) * 40 // 每项高度为 40

  return (
    <List height={maxHeight} itemCount={options.length} itemSize={40} initialScrollOffset={initialOffset}>
      {({ index, style }) => (
        <div style={style}>
          {React.cloneElement(children[index], {
            key: index
          })}
        </div>
      )}
    </List>
  )
}

const IconSelect = ({ onChange = () => {} }) => {
  const [selectValue, setSelectValue] = useState(defaultIcon)
  const [selectOptions, setSelectOptions] = useState([defaultIcon])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(iconifyAPI)
        const result = await response.json()

        const options = result.uncategorized.map((item) => ({
          value: item,
          label: item
        }))

        setSelectOptions([defaultIcon, ...options])
      } catch (error) {
        console.error('加载图标失败:', error)
      }
    }
    fetchData()
  }, [])

  const handleChange = (selectedOption) => {
    setSelectValue(selectedOption)
    onChange(selectedOption)
  }

  return (
    <Select
      value={selectValue}
      options={selectOptions}
      components={{ Option: CustomOption, MenuList: MenuList }}
      onChange={handleChange}
      placeholder='搜索图标'
      isSearchable={true}
      isClearable={false}
      styles={{
        menuList: (base) => ({ ...base, padding: 0 })
      }}
    />
  )
}

export default IconSelect
