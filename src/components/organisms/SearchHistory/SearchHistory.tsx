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
          <li>
            <a href='#'>Toronto, ON</a>
          </li>
          <li>
            <a href='#'>Mississauga, ON</a>
          </li>
          <li>
            <a href='#'>Brampton, ON</a>
          </li>
          <li>
            <a href='#'>Vancounver, BC</a>
          </li>
          <li>
            <a href='#'>Montreal, QC</a>
          </li>
          <li>
            <a href='#'>London, ON</a>
          </li>
          <li>
            <a>-</a>
          </li>
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
