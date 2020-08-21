import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap'
import '../../css/admin.css';
import logo from '../../assets/logo.jpg';
import { loginUser, handleFieldChange } from '../../store/actions/usersActions';

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const user = this.props.users.loginCredentials;
    if (Object.keys(user).length > 0) {
      if (user.username === null) {
        alert ('Please enter username.');
      }
      else if (user.password === null) {
        alert ('Please enter password.');
      }
      else {
        this.props.loginUser(() => {
          this.props.history.push('/dashboard');
        });
      }
    }
    else {
      alert ('Invalid User.');
    }
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <img src={logo} id="admin-page-logo" width="100" height="100" alt="gianne-amparo" align="center" />
        <Row id="admin-page-login">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="test" placeholder="Enter email" onChange={this.props.handleFieldChange} />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.props.handleFieldChange}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={(e) => {
                this.handleSubmit(e);
              }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (...args) => dispatch(loginUser(...args)),
    handleFieldChange: (...args) => dispatch(handleFieldChange(...args))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
