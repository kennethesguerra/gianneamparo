import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import Home from '../Home';
import About from '../About';

import Header from './Header';
import Menus from './Menus';
import Footer from './Footer';
import ImageModal from '../ImageModal';

class Main extends Component {

  switchContent = () => {
    const pathname = this.props.location.pathname;

    switch (pathname) {
      case '/home':
        return <Home />;
      case '/about':
        return <About />;
      default: 
        return <Home />;
    }
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Menus history={this.props.history}/>
        <ImageModal />
        <Container>
          <Row id="main-content">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              { this.switchContent() }
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Main
