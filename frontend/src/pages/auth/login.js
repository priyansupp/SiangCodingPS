import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css'

const Login=()=>{

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		console.log(email + password);
		e.preventDefault();
		const data = {
			"email": email,
			"password": password
		}
		await axios.post("http://192.168.101.99:3000/api/auth/login/", data).then((response) => {
			console.log(response.data)
			const { token } = response.data;			// token has refresh and access token components
			localStorage.setItem('token', token);		// sets the token in localstorage
		})
	}

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
            <input type="email" placeholder="Email" className='email_login_new' onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className='password_login_new' onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" className='log_button_login_new' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>

	)
}

export default Login;