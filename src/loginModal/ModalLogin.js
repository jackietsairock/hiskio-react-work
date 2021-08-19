import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

class ModalLogin extends Component {
  state = {
    username: "",
    password: ""
  };
  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefalt();
    const { username, password } = this.state;
    axios.post("/api/login", { username, password }).then(rs => {
      if (rs.data.success) {
        //關閉modal視窗
        this.props.setState({
          modal: null,
          login: true
        });
      }
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3" controlId="formAccount">
          <Form.Label>Account:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Enter account"
            onChange={this.onChangeUsername}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ModalLogin;
