import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import logo from '../assets/logo.png'
import "./css/auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [actName, setActName] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const register = (e) => {
    e.preventDefault();
    fetch(`https://vy-backend.herokuapp.com/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
        actName,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <div id="signup">

      <div>
        <Form  onSubmit={(e) => register(e)}>
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
            <Label for="fNameField" style={{color: 'var(--butter', float: 'left'}}>FirstName</Label>
            <Input
              name="first name"
              id="fNameField"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lNameField" style={{color: 'var(--butter', float: 'left'}}>Email</Label>
            <Input
              name="lastName"
              id="lNameField"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
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
          <FormGroup>
            <Label for="actField"  style={{color: 'var(--butter', float: 'left'}}>Act Name</Label>
            <Input
              name="actName"
              id="actField"
              placeholder="Enter your password"
              onChange={(e) => setActName(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
