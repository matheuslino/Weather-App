import React from 'react'
import Box from '../../atoms/Box/Box'
import Title from '../../atoms/Title/Title'
import styles from './style.module.css'

const Details = (props: any) => {
  const render = (
    <Box className={`${styles.Details} ${props?.className}`}>
      <Title>Details</Title>
    </Box>
  )
  return render
}
export default Details
