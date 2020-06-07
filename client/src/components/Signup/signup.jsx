import React from "react"
import { Button, Input, Row, Col, Divider, message } from "antd"
import axios from 'axios'

import history from '../../history';
import './login.scss';
import login from './login.png';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: '', pass: '', confirmPass: '' }
  }
  handleClick = e => {
    if (this.state.pass == this.state.confirmPass) {
      const cred = { name: this.state.name, pass: this.state.pass }
      console.log(cred);
      axios
        .post('/auth/signup', cred)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            history.push('/');
            message.info("Please Login");
          }
          else 
            message.error("User with this name already exist !!!");
        })
        .catch(err => {
          console.error(err);
        });
    }
    else
      message.error("Password does not match!!!");
  }
  handleChange = e => {
    var name = e.target.id;
    this.setState({ [name]: e.target.value })
  }
  handleRedirect = e => {
    history.push('/');
  }
  componentDidMount() {

  }
  render() {
    return (
      <Row justify="space-around" align="middle" className="login-wrapper" justify="space-around" align="middle">
        <Col span={3}></Col>
        <Col className="login" span={6}>
          <div className="title">TASK MANAGER</div>
          <Input size="large" value={this.state.name} onChange={this.handleChange} id="name" placeholder="Username" /><br /><br />
          <Input.Password size="large" value={this.state.pass} onChange={this.handleChange} id="pass" placeholder="Password" /><br /><br />
          <Input.Password size="large" value={this.state.confirmPass} onChange={this.handleChange} id="confirmPass" placeholder="Confirm Password" /><br /><br />
          <Button className="login-btn" size="large" onClick={this.handleClick} type="primary">SIGN UP</Button>
          <Button onClick={this.handleRedirect} type="link">Already have an account? Login</Button>
        </Col>
        <Col className="svg" span={8}>
          <img src={login} />
        </Col>
        <Col span={5}></Col>
      </Row>
    )
  }
}

export default Signup;