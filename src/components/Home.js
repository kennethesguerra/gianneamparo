import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import img1 from '../assets/289-200x300.jpg';
import img2 from '../assets/logo.png';
import img3 from '../assets/584-200x200.jpg';

class Home extends Component {
  render() {
    return (
      <Row className="mt-3">
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img1} id="ken" class="home-gallery-photo" onClick={(e) => {
            document.getElementById('myModal').style.display = "block";
            var src = document.getElementById('ken').src
            document.getElementById('modal-image').src = src;
          }}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img2} width="200" height="200" class="home-gallery-photo" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img3} width="200" height="200" class="home-gallery-photo" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img1} id="ken" class="home-gallery-photo" onClick={(e) => {
            document.getElementById('myModal').style.display = "block";
            var src = document.getElementById('ken').src
            document.getElementById('modal-image').src = src;
          }}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img2} width="200" height="200" class="home-gallery-photo" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={img3} width="200" height="200" class="home-gallery-photo" />
        </Col>
      </Row>
    )
  }
}

export default Home
