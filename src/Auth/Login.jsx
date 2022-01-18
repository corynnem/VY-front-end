import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import "./css/auth.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    fetch(`https://vy-backend.herokuapp.com/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json())
    .then(json => console.log(json))
  };

 

  return (
    <div id="signup">

      <div>
        
        <Form  onSubmit={(e) => login(e)} >
          <FormGroup>
            <Label for="emailField" style={{color: 'var(--butter', float: 'left'}}>Email</Label>
            <Input
              type="email"
              name="email"
              id="emailField"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        
          <FormGroup>
            <Label for="passwordField"  style={{color: 'var(--butter', float: 'left'}}>Password</Label>
            <Input
              type="password"
              name="password"
              id="passwordField"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login
