import React, { Component } from 'react'
import Select from 'react-select'
import './style.scss'
const CustomSelect = ({ options, onChange }) => {
  const customStyles = {
    indicatorSeparator: () => ({
      display: 'none',

    }),
    option: (provided, state) => ({
      ...provided,

    }),
    control: base => ({
      ...base,
      height: 28,
      minHeight: 28,
      width: 220,
      minWidth: 220,
      borderRadius: 8,
      borderWidth: 1
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: 28,
      minHeight: 28,
      
      position: 'absolute',
      top: -4
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      position: 'absolute',
      right: 0,
      top: -4
    })
  }
  return (


    <div className='select'>
      <Select placeholder="tipo" options={options} styles={customStyles} onChange={onChange} />
    </div>
  )
}

export default CustomSelect