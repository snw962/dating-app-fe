import axios from "axios";
import { useState } from "react";
import './ForgotPassword.css';
import personplus from "../images/personplus.png"
import { useNavigate } from "react-router-dom";
import emailp from "../images/emailp.png"
import profile from "../images/person.png"

function ForgotPassword(){

    let [email, setEmail] = useState("");

    function onResetPasswordClick(){
        if(email === null){
            alert("Please enter a valid email")
        }else{
        alert("check your email for instructions")
        }
    }

    return(
        <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Password Reset </h1><br/>
            <h3>Enter an email to send the password reset </h3>
            <div>
              <img src={emailp} alt="emailp" className="email" />
              <input type="text" className="name" placeholder='Enter mail ' onChange={event => setEmail(event.target.value)} /><br /><br /><br />
            </div>
            <input type="button" className="password-reset" value="Reset Password" onClick={onResetPasswordClick} />
            
           

            

          </div>
        </div>

      </div>
    </div>
    )
}

export default ForgotPassword;