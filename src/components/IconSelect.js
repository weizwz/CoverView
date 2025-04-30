import React, { useEffect, useState } from 'react'
import Select from 'react-select-virtualized'

// 设置Iconify API的URL
const iconifyAPI = process.env.REACT_APP_API_ICONIFY_URL

const IconSelect = ({ defaultIcon, onChange }) => {
  // 设置默认选项
  const [selectValue, setSelectValue] = useState([defaultIcon])
  const [selectOption, setSelectOption] = useState([defaultIcon])

  // 初始化数据
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(iconifyAPI)
      const result = await response.json()
      setSelectOption(result.uncategorized.map((item) => ({ value: item, label: item })))
    }
    fetchData()
  }, [])

  const handleChange = (selectedOption) => {
    setSelectValue(selectedOption)
    // 触发父组件的 onChange 函数
    onChange(selectedOption)
  }

  const formatOptionLabel = ({ value, label }) => (
    <div className='flex items-center pr-2'>
      <span className='mr-2'>{label}</span>
      <div className='ml-auto mr-2'>
        <img width={24} height={24} src={`https://api.iconify.design/simple-icons/${value}.svg`} alt={`${label} icon`} />
      </div>
    </div>
  )

  return (
    <Select
      value={selectValue || null}
      options={selectOption}
      formatOptionLabel={formatOptionLabel}
      onChange={handleChange}
      placeholder='搜索图标...'
      isSearchable={true}
      isClearable={false}
    />
  )
}

export default IconSelect
