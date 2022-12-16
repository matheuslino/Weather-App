/*
Project: Weather API
Version: 2.0.0
Author: Matheus A. Lino
Author URI: https://matheuslino.dev
*/

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
    <div className='App'>
      <main className='main py-4'>
        <Container>
          {/* Title */}
          <Row>
            <Col className='title size2 py-2'>Weather API</Col>
          </Row>

          {/* Search bar */}
          <Row className='my-5'>
            <Col xs='9' md='11'>
              <input
                type='text'
                value={query}
                placeholder='Find city ...'
                className='searchBar w-100 h-100 text-center'
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs='3' md='1' className='pl-0'>
              <div
                className='searchField w-100 h-100 rounded-right'
                onClick={() => search('btn')}
              >
                <FontAwesomeIcon icon={faSearch} className='h-100' />
              </div>
            </Col>
          </Row>

          {/* Main Info */}
          <Row className='mx-2 mx-md-auto justify-content-between'>
            <Col xs='12' md='8' className='box p-4 mb-4 mb-md-0 rounded'>
              <span className='title2 size1'>Information</span>
              <hr />

              {/* Show data */}
              {typeof weather?.main != 'undefined' ? (
                <div>
                  <div className='location-box'>
                    <div className='location'>
                      {weather.name}, {weather.sys.country}
                    </div>
                    <div className='date'>{dateBuilder(new Date())}</div>
                  </div>
                  <div className='weather-info my-4'>
                    <div className='col-12 col-md-3 temp mb-3 mb-md-0 rounded mr-4'>
                      {weather.main.temp}°c
                    </div>
                    <div className='col-12 col-md-3  mb-4 moisture rounded'>
                      {weather.main.humidity}%
                    </div>
                    <div className='weather'>
                      {weather.weather[0].main}
                      <br />
                      <span className='text-default'>
                        ({weather.weather[0].description})
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='text-default'>
                  Data not found! Please try again.
                </div>
              )}
            </Col>
            <Col xs='12' md='3'>
              {/* History section */}
              <section>
                <Row>
                  <Col className='box p-4 rounded'>
                    <span className='title2 size1'>Latest searches</span>
                    <hr />

                    {localStorage.getItem('cities') != null ? (
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className='h-100 text-light size0 mr-2'
                          />
                          <span>-</span>
                        </li>
                      </ul>
                    ) : (
                      <div className='text-default'>No history.</div>
                    )}
                  </Col>
                </Row>
              </section>

              {/* Popular section */}
              <section className='mt-4'>
                <Row>
                  <Col className='box p-4 rounded'>
                    <span className='title2 size1'>Popular</span>
                    <hr />
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className='h-100 text-light size0 mr-2'
                        />
                        <span>-</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
        </Container>

        <footer className='mt-5 d-flex flex-column align-items-center'>
          <hr className='w-75' />
          <div className='mt-3'>
            ©2020{' '}
            <a href='https://linkedin.com/in/matheus-lino/' target='_blank'>
              Matheus A. Lino
            </a>{' '}
            - All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
