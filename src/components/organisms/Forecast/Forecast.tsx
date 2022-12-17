import React from 'react'
import Box from '../../atoms/Box/Box'
import Title from '../../atoms/Title/Title'
import styles from './style.module.css'

const Forecast = (props: any) => {
  const render = (
    <Box className={`${styles.Forecast} ${props?.className}`}>
      <Title>Forecast</Title>
    </Box>
  )
  return render
}
export default Forecast
