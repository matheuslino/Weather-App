import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Widget from '../../molecules/Widget/Widget'
import styles from './style.module.css'

const Details = (props: any) => {
  const render = (
    <Row className={`${styles.Details} ${props?.className} g-2`}>
      {[
        'Sunrise',
        'Wind',
        'Clouds',
        'Preciptation',
        'Feels like',
        'Humidity',
        'Visibility',
        'Pressure',
      ].map((item, key) => (
        <Col xs={3}>
          <Widget className='w-100'>{item}</Widget>
        </Col>
      ))}
    </Row>
  )
  return render
}
export default Details
