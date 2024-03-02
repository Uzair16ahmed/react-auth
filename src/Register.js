import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = e => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // // make a popup alert showing the "submitted" text
    // alert("Submited");
    
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3500/register",
      data: {
        email,
        password
      },
    };

    axios(configuration)
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);})
  }

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/*email*/}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
           type="email"
           name="email"
           value={email} 
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter Email"
           />
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
          Register
        </Button>
      </Form>
    </>
  )
}

export default Register


