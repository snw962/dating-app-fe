import React, { useState } from 'react';
import logo from './logo.svg';
import './login.css';
import profile from "../images/person.png"
import email from "../images/email.png"
import love from "../images/love.png"
import lock from "../images/lock.png"
import jwt_decode from 'jwt-decode';
import { json } from 'stream/consumers';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ISuccessfulLoginData from '../models/ISuccessfulLoginData';
import axios from 'axios';
import { ActionType } from '../redux/action-types';

function App() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  async function onButtonClick() {
    try {
      const response = await axios.post("http://localhost:8080/users/login", { userName, password });
      //  console.log(response)

      let token = response.data;
      let decodedToken : any = jwt_decode(token)
      let strSuccessfullLoginResponse: string = decodedToken.sub
      let successfullLoginResponse: ISuccessfulLoginData = JSON.parse(strSuccessfullLoginResponse)
      console.log(" Decoded: ", successfullLoginResponse)
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      let userState = successfullLoginResponse.userType;
      dispatch({type: ActionType.SaveUserType, payload: userState})

      if (successfullLoginResponse.userType === 'ADMIN') {
        navigate('/admin');
      }
      if (successfullLoginResponse.userType === 'CUSTOMER') {
        navigate('/customer');
      }
     


    } catch (e: any) {
      console.error(e);
      if (e.response?.data?.error?.message) {
        alert(e.response.data.error.message)
      } else {
        alert("Login invalid, try later")
      }
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" className="name" placeholder='User Name' onChange={event => setUserName(event.target.value)} /><br />
            </div>
            <div className="second-input">
              <img src={lock} alt="lock" className="email" />
              <input type="password" className="name" placeholder='Password' onChange={event => setPassword(event.target.value)} /><br />
            </div>
            <div className="login-button">
              <input type="button" className="button" value="Login" onClick={onButtonClick} /><br />
            </div>

            <p className="link">
              <a href="#"> Forgot Password?</a> or <a href="#"> Sign up</a>
            </p>

          </div>
        </div>

      </div>
    </div>

  );
}

export default App;