import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  const render = (
    <section className={styles.footer}>
      <footer className={`d-flex flex-column align-items-center`}>
        <hr className='w-75' />
        <div className='mt-3'>
          ©2022{' '}
          <a href='https://linkedin.com/in/matheus-lino/' target='_blank'>
            Matheus A. Lino
          </a>{' '}
          - All rights reserved.
        </div>
      </footer>
    </section>
  )
  return render
}

export default Footer
