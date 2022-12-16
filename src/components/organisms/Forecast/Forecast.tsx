import React from 'react'
import { Container } from 'reactstrap'
import styles from './styles.module.css'

const Forecast = (props: any) => {
  const render = <Container className={props?.className}>Forecast</Container>
  return render
}
export default Forecast
