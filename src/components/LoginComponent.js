import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './LoginComponent.css';

const LoginComponent = () => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number, password }),
        });


        const data = await response.json();
        
        if (!response.ok) {
            throw new Error('Failed to login: ', data);
        }
        
          // Handle response from the server
        console.log('Login successful:', data);
        
          // Reset the form after successful login
        setNumber('');
        setPassword('');
        } catch (error) {
        console.error('Error:', error.message);
          // Handle error
        }
    };

    return (<>
    <Container className="login-container">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
        <FormGroup>
            <Label for="number">Number</Label>
            <Input
            type="text"
            name="number"
            id="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </FormGroup>
        <Button color="primary" type="submit">Login</Button>
        </Form>
    </Container>
    </>)
}

export default LoginComponent