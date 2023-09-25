import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// components
import MovieList from '../components/MovieList';


const Movies = () => {
  return (
    <>
      <div className="container">
        <div className="movie-sidebar-wrapper">
          <Container>
            <Row>
              <Col lg={4}>
                {/* <SideBar></SideBar> */}
              </Col>
              <Col lg={8}>
                <MovieList></MovieList>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Movies
