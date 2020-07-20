/*
Project: Weather API
Version: 1.0.0
Author: Matheus A. Lino
Author URI: https://matheuslino.com.br
*/

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <main className="main py-4">
        <Container>

          {/* Title */}
          <Row className="">
            <Col className="title size2 py-2">
              Weather API
            </Col>
          </Row>

          {/* Search bar */}
          <Row className="my-5">
            <Col xs="9" md="11" className="pr-0">
              <input
                type="text"
                className="searchBar w-100 py-2 text-center rounded-left"
                placeholder="Find city ..."
              />
            </Col>
            <Col xs="3" md="1" className="pl-0">
              <div className="searchField w-100 h-100 rounded-right">
                <FontAwesomeIcon icon={faSearch} className="h-100" />
              </div>
            </Col>
          </Row>

          {/* Main Info */}
          <Row className="mx-2 mx-md-auto justify-content-between">
            <Col xs="12" md="8" className="box p-4 mb-4 mb-md-0 rounded">
              <span className="title2 size1">
                Information
              </span>
              <hr />
              <div className="location-box">
                <div className="location">
                  Toronto, CA
                </div>
                <div className="date">
                  Monday 20 July 2020
                </div>
              </div>
              <div className="weather-info my-4">
                <div className="col-12 col-md-3 temp mb-3 mb-md-0 rounded mr-4">
                  18ºC
                </div>
                <div className="col-12 col-md-3  mb-4 moisture rounded">
                  5mm
                </div>
                <div className="weather">
                  Sunny
                </div>
              </div>
            </Col>
            <Col xs="12" md="3">

              {/* History section */}
              <section>
                <Row>
                  <Col className="box p-4 rounded">
                    <span className="title2 size1">
                      Latest searches
                    </span>
                    <hr />
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faChevronRight} className="h-100 text-light size0 mr-2" />
                        <span>Item</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>

              {/* Popular section */}
              <section className="mt-4">
                <Row>
                  <Col className="box p-4 rounded">
                    <span className="title2 size1">
                      Popular
                    </span>
                    <hr />
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faChevronRight} className="h-100 text-light size0 mr-2" />
                        <span>Item</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
        </Container>

        <footer className="mt-5 justify-content-center">
          <div className="container">
            <hr className="w-75" />
            <div className="mt-3">
              <div>
                <span>
                  ©2020
                <a href="https://linkedin.com/in/matheus-lino/" target="_blank"> Matheus A. Lino </a>
                - All rights reserved.
              </span>
              </div>
            </div>
          </div>
        </footer>
      </main>

    </div >
  );
}

export default App;