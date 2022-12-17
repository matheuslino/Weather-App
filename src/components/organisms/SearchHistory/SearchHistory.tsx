import React from 'react'
import { Container } from 'reactstrap'
import Box from '../../atoms/Box/Box'
import Title from '../../atoms/Title/Title'
import styles from './style.module.css'

const SearchHistory = (props: any) => {
  const renderList = () => {
    return (
      <Container className='pt-2'>
        <ul>
          <li>Toronto, ON</li>
          <li>Mississauga, ON</li>
          <li>Brampton, ON</li>
          <li>Vancounver, BC</li>
          <li>Montreal, QC</li>
          <li>London, ON</li>
          <li>-</li>
        </ul>
      </Container>
    )
  }

  const render = (
    <Box className={`${styles.Searchbox} ${props?.className}`}>
      <Title>Search History</Title>
      {renderList()}
    </Box>
  )
  return render
}
export default SearchHistory
