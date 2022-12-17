import React from 'react'
import styles from './style.module.css'

const Header = () => {
  const render = (
    <section className={styles.header}>
      <header>
        <h1>Weather App</h1>
      </header>
    </section>
  )
  return render
}

export default Header
