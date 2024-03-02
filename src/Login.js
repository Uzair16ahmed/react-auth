import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = e => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:3500/login",
      data: {
        email,
        password
      },
    };

    axios(configuration)
    .then((res) => {
      // set the cookie
      cookies.set("TOKEN", res.data.token, {
        path: "/",
      });
      // redirect user to the auth page
      window.location.href = "/auth";
      // console.log(res);
      setLogin(true);
    })

    .catch((error) => {
      console.log(error);
      error = new Error();
    });
     
  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/*email*/}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"/>
        </Form.Group>

        {/*password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"/>
        </Form.Group>

        {/*submit button*/}
        <Button 
        variant="primary"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {/* display success message */}
        {login ? (
          <p className="text-success">You are Logged in Successfully.</p>
        ) : (
          <p className="text-danger">You are not Logged in</p>
        )}
      </Form>
    </>
  )
}

export default Login


