import React from 'react'
import { Row, Col } from 'reactstrap'
import Widget from '../../molecules/Widget/Widget'
import styles from './style.module.css'

const Widgets = (props: any) => {
  const render = (
    <Row className={`${styles.Widgets} ${props?.className} g-2`}>
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
export default Widgets
