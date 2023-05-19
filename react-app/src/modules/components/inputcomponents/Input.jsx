/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Input({placeholder, value="", onclick=null,name=null, type , refs}) {
  return (
      <div className='w-full h-fit space-y-1'>
          <label className='font-thin text-sm '>{name}</label>
          <input ref={refs} onChange={onclick} type={type} className='w-full h-10 lg:h-8 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm' placeholder={placeholder}  />
    </div>
  )
}

export default Input