import React from 'react'
import styles from './style.module.css'

const Title = (props: any) => {
  const render = <div className={styles.Title}>{props?.children}</div>

  return render
}

export default Title
