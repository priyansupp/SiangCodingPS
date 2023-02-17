import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login=()=>{

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const data = {
			"email": email,
			"password": password
		}
    // const dt = JSON.stringify(data);
		await axios.post("http://127.0.0.1:8000/api/auth/login/", data).then((response) => {
			console.log(response.data)
			const { token } = response.data;			// token has refresh and access token components
      // console.log(token.access)
      // console.log(token.refresh)
			localStorage.setItem('access_token', token.access);		// sets the token in localstorage
			localStorage.setItem('refresh_token', token.refresh);		// sets the token in localstorage
      navigate("/")
		})
	}

  const isLogin = async () => {
    const token = localStorage.getItem('access_token');
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/auth/token/verify/", {
        token:token
      })
      if(response){
        console.log("login")
        return true
      }
    }
    catch(err){
      console.log("err")
      return false
    }    
  }
  
  const refreshToken = async () => {
    const token = localStorage.getItem('refresh_token');
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
        refresh:token
      })
      localStorage.setItem('access_token', response.data.access);
      console("refresh")
      return true;
    }
    catch(err){
      console.log("errorfresh")
      return false;
    }
  }

  useEffect(()=>{
      async function getValue(){
        const p = await isLogin()
        console.log(p)
      }
      getValue()

      refreshToken();
  })
  

	return(
		<div className="login_new">
      <div className="card_login_new">
        <div className="left_login_new">
          <h1 className='head_login_new'>Hello World.</h1>
            <p className='para_login_new'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
              alias totam numquam ipsa exercitationem dignissimos, error nam,
              consequatur.
            </p>
          <span className='mess_login_new'>Don't you have an account?</span>
          <Link to="/register">
            <button className='register_but_login_new'>Register</button>
          </Link>
        </div>
        <div className="right_login_new">
          <h1 className='head_login_new'>Login</h1>
          <form className='login_form_new'>
            <input type="email" placeholder="Email" className='email_login_new' onChange={e=>setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" className='password_login_new' onChange={e=>setPassword(e.target.value)} required/>
            <button type='submit' className='log_button_login_new' onClick={handleLogin} >Login</button>
          </form>
        </div>
      </div>
    </div>

	)
}

export default Login;