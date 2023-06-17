import React from 'react'

export const MainLayout = ({children}) => {
    return (
      <React.Fragment>
        <div className='container '>
            <div className='mx-40'>
          {children}
          </div>
        </div>
      </React.Fragment>
    )
}