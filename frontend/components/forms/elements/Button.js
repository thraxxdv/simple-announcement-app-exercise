import React from 'react'

function Button({label ='Submit', onClickCb = () => null, btnType ='btn-primary', additionalClasses = ''}) {
  return (
      <button className={`btn ${btnType} ${additionalClasses}`} onClick={onClickCb}>
        {label}
      </button>
  )
}

export default Button