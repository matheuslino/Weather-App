import React from 'react'
import { Container } from 'reactstrap'
import styles from './style.module.css'

const Box = (props: any) => {
  const render = (
    <Container className={`${styles.Box} ${props?.className} glassmorphism`}>
      {props?.children}
    </Container>
  )
  return render
}
export default Box
