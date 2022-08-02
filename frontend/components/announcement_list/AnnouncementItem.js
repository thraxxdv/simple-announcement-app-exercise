import React from 'react'

function AnnouncementItem({title, content, startDate, endDate}) {
  return (
    <div className='shadow bg-white p-4 mb-3'>
        <h4 className="fw-bold">{title}</h4>
        <p>{content}</p>
        <p>{startDate} to {endDate}</p>
    </div>
  )
}

export default AnnouncementItem