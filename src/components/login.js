import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';

import { login } from '../api/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFailed: false
    };
  }

  loginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    login({ email, password })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(e => {
        this.setState({ loginFailed: true });
      });
  };

  render() {
    return (
      <Form>
        {this.state.loginFailed ? <span> Login Failed </span> : <span />}
        <Input type="text" placeholder="email" id="email" />
        <Input type="password" placeholder="password" id="password" />
        <center>
          <Button onClick={this.loginUser}> Login </Button>
        </center>
      </Form>
    );
  }
}
export default withRouter(Login);
