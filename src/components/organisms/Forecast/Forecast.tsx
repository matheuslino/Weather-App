import React from 'react'
import Box from '../../atoms/Box/Box'
import styles from './style.module.css'

const Forecast = (props: any) => {
  const render = (
    <Box className={`${styles.Forecast} ${props?.className}`}>Forecast</Box>
  )
  return render
}
export default Forecast
