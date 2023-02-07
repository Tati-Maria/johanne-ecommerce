import React from 'react'


//Page Layout
const Layout = ({children}) => {
  return (
    <div 
    className='max-w-6xl mx-auto p-4'
    >
        {children}
    </div>
  )
}

export default Layout;