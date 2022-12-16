import React from 'react'

const Footer = () => {
  const render = (
    <footer className={`d-flex flex-column align-items-center`}>
      <hr className='w-75' />
      <div className='mt-3'>
        ©2020{' '}
        <a href='https://linkedin.com/in/matheus-lino/' target='_blank'>
          Matheus A. Lino
        </a>{' '}
        - All rights reserved.
      </div>
    </footer>
  )
  return render
}

export default Footer
