import React from 'react'

function Button({name}) {
  return (
    <div className='btn'>
        <button className='bg-[#3F20B9] text-white py-1 px-4 rounded-lg text-[16px] font-semibold'>{name}</button>
    </div>
  )
}
export default Button