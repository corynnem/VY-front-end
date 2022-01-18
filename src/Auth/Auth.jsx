import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { FormGroup, Label, Input, Button, Form } from "react-bootstrap";
import logo from '../assets/logo.png'
import "./css/auth.css";

const Auth = ({token, setToken}) => {
  const [loggingIn, setLoggingIn] = useState(true);

  
  const background = {
    backgroundColor: "var(--tamarind)",
    width: "30vw",
    height: "auto",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(0, -50%)",
    padding: '3%',
    borderRadius: '10px',
    marginTop: '3%'
  };



  return (
      <div
        style={{
          display: "block",
          width: 550,
          padding: 30,
        }}
      >
        <img src={logo} style={{height: '50vh', marginLeft: '10vw'}}/>
        <div style={background}>
        {
            loggingIn ? <Login token={token} setToken={setToken}/> : <Signup token={token} setToken={setToken}/>

          
        }
         <Button style={{marginTop: '10vw'}} variant="dark" onClick={() => setLoggingIn(!loggingIn)}>{loggingIn ? 'Login' : 'Signup'}</Button>
        </div>
        

   
      </div>
  );
};

export default Auth;
