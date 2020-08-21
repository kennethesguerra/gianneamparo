import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faSignOutAlt, faUserTie, faCog } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../store/actions/usersActions';

class AdminMenus extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="sidenav">
          <a href="#">
            <FontAwesomeIcon icon={faImages} /> Manage Portfolios
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUserTie} /> Manage Clients 
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCog} /> Settings
          </a>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            this.props.logoutUser();
          }}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </a>
        </div>
        <div class="main">
          ...
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser:  () => dispatch(logoutUser()), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenus)
