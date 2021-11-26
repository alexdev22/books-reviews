import React from 'react'

const Input = ({ handleInputChange, name, type = 'text' }) => {
  return (
    <input onChange={handleInputChange} className='modal-field' name={name} type={type} />
  )
}

export default Input
