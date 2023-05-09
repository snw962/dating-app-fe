import axios from "axios";
import { useState } from "react";
import './register.css';
import personplus from "../images/personplus.png"
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let type  ="CLIENT";
    //let company = null;

    function onBackToLogin(){
      navigate("/")
    }
  
  
    async function register() {
      try {
        const response = await axios.post("http://localhost:8080/clients", {user:{email, password, type}, name, description});
        console.error(response);
      } catch (e) { }
    }
    return (
        <div className="main">
        <div className="sub-main-reg">
            

        <div className='registerForm'>
        <div>
        <div className="imgs-reg">
        <div className="container-image-reg">
              <img src={personplus} alt="personplus" className="personplus" />
    
            </div>
        
            </div>
        <h2>Sign Up</h2>
        </div>
        <div className="all-inputs">
        <input className='input-reg' type="text" placeholder="Email" onChange={event => setEmail(event.target.value)} /><br />
        <input className='input-reg'type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /><br />
        <input className='input-reg'type="text" placeholder="Name" onChange={event => setName(event.target.value)} /><br />
        <input className='input-reg'type="text" placeholder="Description" onChange={event => setDescription(event.target.value)} /><br />
        <input className='sumbit'type="button" value="Submit" onClick={register} /><br/>
        <input className="already-member" type="button" value="Already have an account?" onClick={onBackToLogin}/>
        </div>
        </div>
      </div>
      </div>
    );
  }
  export default App;