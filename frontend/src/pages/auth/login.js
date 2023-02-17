import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
        email, password
      })
      // setting the tokens in local storage
      localStorage.setItem('access_token', res.data.access);
      const time = new Date();
      localStorage.setItem('access_token_time', time.getTime());
      localStorage.setItem('refresh_token', res.data.refresh);
      setLoading(false);
      navigate('/');
    }
    catch (err) {
      console.log(err)
      setError(err.response.data.detail)
    }
  }

  useEffect(() => {
    const time = new Date();
    const access_token_time = localStorage.getItem('access_token_time');
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    if (access_token_time && access_token && refresh_token) {
      // access token is valid for 5 minutes
      if (time.getTime() - access_token_time < 300 * 1000) {
        navigate('/');
      }
      else {
        // refresh token is valid for 1 days
        if (time.getTime() - access_token_time < 24 * 60 * 60 * 1000) {
          axios.post("http://127.0.0.1/:8000/api/auth/token/refresh/", {
            refresh: refresh_token
          })
            .then(res => {
              localStorage.setItem('access_token', res.data.access);
              localStorage.setItem('access_token_time', time.getTime());
              navigate('/');
            })
            .catch(err => {
              console.log(err)
              localStorage.removeItem('access_token');
              localStorage.removeItem('access_token_time');
              localStorage.removeItem('refresh_token');
              const errors = err.response.data.errors;
              if (errors?.length > 0) {
                setError(errors[0].detail);
              }
            })
        }
        else{
          localStorage.removeItem('access_token');
          localStorage.removeItem('access_token_time');
          localStorage.removeItem('refresh_token');
        }
      }
    }
    else {
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_token_time');
      localStorage.removeItem('refresh_token');
    }
  })


  return (
    <div className="login_new">
      {error && <div className="error">{error}</div>}
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
            <input type="email" placeholder="Email" className='email_login_new' onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className='password_login_new' onChange={e => setPassword(e.target.value)} required />
            <button type='submit' className='log_button_login_new' onClick={handleLogin} >Login</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;