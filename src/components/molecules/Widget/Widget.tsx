import React from 'react'
import Box from '../../atoms/Box/Box'
import styles from './style.module.css'

const Widget = (props: any) => {
  const render = (
    <Box className={`${styles.Widget} ${props?.className}`}>
      {props.children}
    </Box>
  )
  return render
}
export default Widget
