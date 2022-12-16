import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Searchbar = () => {
  const render = (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
      <input placeholder='Toronto' />
    </div>
  )
  return render
}

export default Searchbar
