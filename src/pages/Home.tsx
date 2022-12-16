import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './style.css'

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

  const search = (e: any) => {
    if (e.key === 'Enter' || e == 'btn') {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setHistory(result)
          setQuery('') // clean search bar
        })
    }
  }

  return (
    <div className='Home'>
      <footer className='d-flex flex-column align-items-center'>
        <hr className='w-75' />
        <div className='mt-3'>
          ©2020{' '}
          <a href='https://linkedin.com/in/matheus-lino/' target='_blank'>
            Matheus A. Lino
          </a>{' '}
          - All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home
