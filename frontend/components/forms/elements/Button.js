import React from 'react'

function Button({label ='Submit', onClickCb = () => null, btnType ='btn-primary', additionalClasses = '', type="submit"}) {
  return (
      <button className={`btn ${btnType} ${additionalClasses}`} onClick={onClickCb} type={type}>
        {label}
      </button>
  )
}

export default Button