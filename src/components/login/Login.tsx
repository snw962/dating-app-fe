import React, { useState } from 'react';
import './login.css';
import profile from "../images/person.png"
import emailp from "../images/emailp.png"
import lock from "../images/lock.png"
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ISuccessfulLoginData from '../models/ISuccessfulLoginData';
import axios from 'axios';
import { ActionType } from '../redux/action-types';

function App() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function onSignUpClick(){
    navigate("/register")
  }
  async function onButtonClick() {
    
    try {
      const response = await axios.post("http://localhost:8080/users/login", { email, password });
        console.log(response)
      
      let token = response.data;
      let decodedToken : any = jwt_decode(token)
      let strSuccessfullLoginResponse: string = decodedToken.sub
      let successfullLoginResponse: ISuccessfulLoginData = JSON.parse(strSuccessfullLoginResponse)
      console.log(" Decoded: ", successfullLoginResponse)
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      let userState = successfullLoginResponse.type;
      dispatch({type: ActionType.SaveUserType, payload: userState})

      if (successfullLoginResponse.type === 'CLIENT') {
        navigate('/client');
      }
      if (successfullLoginResponse.type === 'ADMIN') {
        navigate('/ADMIN');
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
              <img src={emailp} alt="emailp" className="email" />
              <input type="text" className="name" placeholder='User Name' onChange={event => setEmail(event.target.value)} /><br />
            </div>
            <div className="second-input">
              <img src={lock} alt="lock" className="email" />
              <input type="password" className="name" placeholder='Password' onChange={event => setPassword(event.target.value)} /><br />
            </div>
            <div className="login-button">
              <input type="button" className="button" value="Login <3" onClick={onButtonClick} /><br />
            </div>

            <p className="link">
            <input type="button" className="forgotPassword" value="Forgot password" /> or<input type="button" className="signUp" value="sign up" onClick={onSignUpClick} /><br />

            </p>

          </div>
        </div>

      </div>
    </div>

  );
}

export default App;