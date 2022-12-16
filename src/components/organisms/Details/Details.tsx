import React from 'react'
import Box from '../../atoms/Box/Box'
import styles from './style.module.css'

const Details = (props: any) => {
  const render = (
    <Box className={`${styles.Details} ${props?.className}`}>Details</Box>
  )
  return render
}
export default Details
