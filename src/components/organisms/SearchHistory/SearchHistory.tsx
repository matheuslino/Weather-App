import React from 'react'
import Box from '../../atoms/Box/Box'
import Title from '../../atoms/Title/Title'
import styles from './style.module.css'

const SearchHistory = (props: any) => {
  const render = (
    <Box className={`${styles.Searchbox} ${props?.className}`}>
      <Title>Search History</Title>
    </Box>
  )
  return render
}
export default SearchHistory
