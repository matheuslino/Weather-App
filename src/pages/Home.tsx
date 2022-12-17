import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import SearchHistory from '../components/organisms/SearchHistory/SearchHistory'
import Searchbar from '../components/molecules/Searchbar.tsx/Searchbar'
import Forecast from '../components/organisms/Forecast/Forecast'
import Details from '../components/organisms/Details/Details'
import Widgets from '../components/organisms/Widgets/Widgets'
import Header from '../templates/Header/Header'
import Footer from '../templates/Footer/Footer'
import styles from './style.module.css'

const api = {
  key: process.env.REACT_APP_API_KEY,
  url: 'https://api.openweathermap.org/data/2.5/',
}

const setHistory = (data: any) => {
  // let city = data?.name + ', ' + data?.sys?.country
  // let cities =
  //   localStorage.getItem('cities') !== null
  //     ? JSON.parse(localStorage.getItem('cities'))
  //     : Array()
  // if (cities.length === 3) cities.shift()
  // cities.push(city)
  // localStorage.setItem('cities', JSON.stringify(cities))
}

const Home = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState<any>({})

  const dateBuilder = (d: any) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  // const search = (e: any) => {
  //   if (e.key === 'Enter' || e == 'btn') {
  //     fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result)
  //         setHistory(result)
  //         setQuery('') // clean search bar
  //       })
  //   }
  // }

  return (
    <Container
      className={`${styles.Home} d-flex flex-column justify-content-center px-4 py-2`}
    >
      <Row className='align-items-center mb-2'>
        <Col xs={12} md={4} className='text-center'>
          <Header />
        </Col>
        <Col>
          <Searchbar className={'w-100'} />
        </Col>
      </Row>
      <Row className='g-2 mb-2'>
        <Col xs={12} md={4} className='d-flex flex-column'>
          <SearchHistory className={`${styles.SearchHistory} flex-grow-1`} />
        </Col>
        <Col xs={12} md={8}>
          <Details className={styles.Details} />
        </Col>
      </Row>
      <Row className='g-2'>
        <Col xs={12} md={4} className='d-flex flex-column'>
          <Forecast className={`${styles.Forecast} flex-grow-1`} />
        </Col>
        <Col xs={12} md={8}>
          <Widgets className={styles.Widgets} />
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default Home
