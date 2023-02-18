import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { TokenContext } from '../../context/tokenContext';
import { UserContext } from '../../context/userContext';

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const data = {
			"email": email,
			"password": password
		}
    let access_token = "";
    // const dt = JSON.stringify(data);
		await axios.post("/api/auth/login/", data).then((response) => {
			console.log(response.data)
			const { token } = response.data;			// token has refresh and access token components
      // console.log(response.data.data['is_customer']);
      // console.log(token.access)
      // console.log(token.refresh)
      access_token = token.access;
			localStorage.setItem('access_token', token.access);		// sets the token in localstorage
			localStorage.setItem('refresh_token', token.refresh);		// sets the token in localstorage

      // set in context
      setToken({'access_token': token.access, 'refresh_token': token.refresh});
		}).catch(e => {
      console.log(`error1 is ${e}`);
    });
    console.log(access_token);
    await axios.get("/api/auth/profile/", {
      headers: {"Authorization" : `Bearer ${access_token}`}
    }).then(res => {
      console.log(res.data);
      setUser(res.data);
      navigate("/");
    }).catch(e => {
      console.log(`error2 is ${e}`);
    });
	}

  // const isLogin = async () => {
  //   const token = localStorage.getItem('access_token');
  //   try{
  //     const response = await axios.post("http://127.0.0.1:8000/api/auth/token/verify/", {
  //       token:token
  //     })
  //     if(response){
  //       console.log("login")
  //       return true
  //     }
  //   }
  //   catch(err){
  //     console.log("err")
  //     return false
  //   }    
  // }
  
  // const refreshToken = async () => {
  //   const token = localStorage.getItem('refresh_token');
  //   try{
  //     const response = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
  //       refresh:token
  //     })
  //     localStorage.setItem('access_token', response.data.access);
  //     console("refresh")
  //     return true;
  //   }
  //   catch(err){
  //     console.log("errorfresh")
  //     return false;
  //   }
  // }

  // useEffect(()=>{
  //     async function getValue(){
  //       const p = await isLogin()
  //       console.log(p)
  //     }
  //     getValue()

  //     refreshToken();
  // })
  

  // if(loading){
  //   return(
  //     <div className='loading_container'>
  //       <div className="loading">
  //         <AiOutlineLoading3Quarters className='icon'/>
  //       </div>
  //     </div>
  //   )
  // }

  // if(error){
  //   return (
  //     <div className='error_container'>
  //       <div className="error">
  //         <BiMessageSquareError className='icon'/>
  //         <span>{error}</span>
  //       </div>
  //     </div>
  //   )
  // }


  return (
    <div className="login_new">
      {/* {error && <div className="error">{error}</div>} */}
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