import React from 'react'

const controls = ({ toggleZoom, framezoom, resetPage, activePage }) => {
  return (
    <div className='absolute top-3 right-3 space-x-2 z-10'>
        <button className='text-2xl text-pink-400 cursor-pointer hidden lg:inline-block' onClick={toggleZoom}>
            <i className={ framezoom ? 'bx bx-zoom-out' : 'bx bx-zoom-in'  }></i>
        </button>
        <button className={`text-2xl ${activePage === 0 ? "text-pink-200 cursor-not-allowed" : "text-pink-400 cursor-pointer"}`} onClick={resetPage}>
            <i className="bx bx-x-circle"></i>
        </button>
    </div>
  )
}

export default controls