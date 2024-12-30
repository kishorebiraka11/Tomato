import React from 'react'

const Button = ({buttonText, className}) => {
  return (
    <button className={className ? className : ""}>{buttonText}</button>
  )
}

export default Button
