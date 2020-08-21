import React, { Component } from 'react';
import { Cache } from 'aws-amplify';
import { connect } from 'react-redux';
import '../../css/dashboard.css';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';

import AdminMenus from './AdminMenus';

class Dashboard extends Component {
  componentDidMount() {
    const isLoggedIn = this.props.users.isLoggedIn;
    const apiToken = Cache.getItem('apiToken');
    if (!apiToken) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" id="admin-header">
          <Navbar.Brand href="#home">
            <img  src={logo} width="100" height="100" alt="gianne-amparo-illustrations" />
          </Navbar.Brand> 
          Administrator
        </Navbar>
        <Container>
          <AdminMenus />
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)