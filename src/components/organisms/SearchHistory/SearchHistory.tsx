import React from 'react'
import Box from '../../atoms/Box/Box'
import styles from './style.module.css'

const SearchHistory = (props: any) => {
  const render = (
    <Box className={`${styles.Searchbox} ${props?.className}`}>
      SearchHistory
    </Box>
  )
  return render
}
export default SearchHistory
