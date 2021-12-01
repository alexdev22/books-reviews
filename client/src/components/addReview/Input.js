import React from 'react'

const Input = ({ handleInputChange, name, type = 'text' }) => {
  return (
    <input onChange={handleInputChange} autoComplete='off' className='modal-field' name={name} type={type} />
  )
}

export default Input
