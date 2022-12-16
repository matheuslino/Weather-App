import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Searchbar = (props: any) => {
  const render = (
    <div className={`${styles.container} ${props?.customClass}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
      <input placeholder='toronto' />
    </div>
  )
  return render
}

export default Searchbar
