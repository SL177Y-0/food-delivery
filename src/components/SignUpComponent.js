import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './SignUpComponent.css';

const SignUpComponent = () => {


  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, number, email, password }),
      });



      if (!response.ok) {
        throw new Error('Failed to SignUp: ');
      }




      const data = await response.json();
      console.log('signup successful', data);

      setUsername('');
      setPassword('');
      setNumber('');
      setEmail('');
    } catch (error) {
      console.error('Error: ', error.message);
    }
  };



  return (<>
    <div>SignUpComponent</div>
    <Container className="signup-container">
        <h2>SignUp</h2>
        <Form onSubmit={handleSignUp}>
        <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Label for="number">Number</Label>
            <Input
            type="text" name="number" id="number" placeholder="Enter your number" value={number} onChange={(e) => setNumber(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input
            type="text" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input
            type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
        </FormGroup>
        <Button color="primary" type="submit">SignUp</Button>
        </Form>
    </Container>
  </>)
}

export default SignUpComponent