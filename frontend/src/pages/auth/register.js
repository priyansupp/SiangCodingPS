import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiMessageSquareError } from 'react-icons/bi';

function Register() {
  const navigate = useNavigate();
	const[email, setemail] = useState("");
	const[name, setname] = useState("");
	const[contact, setcontact] = useState("");
	const[password, setpassword] = useState("");
	const[cnfpassword, setcnfpassword] = useState("");
	const[is_shopkeeper, setis_shopkeeper] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const resetError = ()=>{
    setTimeout(() => {
      setError("");
    }, 3000);
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(password !== cnfpassword){
      setError("Password and Confirm Password must be same")
      resetError();
      setLoading(false);
      return;
    }
    // Regex for phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if(!phoneRegex.test(contact)){
      setError("Invalid Phone Number");
      resetError();
      setLoading(false);
      return;
    }

    try{
      const res = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
        email, name, contact, password, cnfpassword, is_shopkeeper
      })
      // setting the tokens in local storage
      localStorage.setItem('access_token', res.data.access);
      const time = new Date();
      localStorage.setItem('access_token_time', time.getTime());
      localStorage.setItem('refresh_token', res.data.refresh);
      setLoading(false);
      navigate('/');
    }
    catch(err){
      const errors = err.response.data.errors;
      console.log(errors)
      if(errors?.length > 0){
        if(errors[0].detail.includes("UNIQUE constraint failed:")){
          setError("Email already exists");
          resetError();
        }
        else{
          setError("Something went wrong");
          resetError();
        }
      }
      setLoading(false);
    }
  }
  
  if(loading){
    return(
      <div className='loading_container'>
        <div className="loading">
          <AiOutlineLoading3Quarters className='icon'/>
        </div>
      </div>
    )
  }

  if(error){
    return (
      <div className='error_container'>
        <div className="error">
          <BiMessageSquareError className='icon'/>
          <span>{error}</span>
        </div>
      </div>
    )
  }

  return ( 
    <div className="register_new_r">
      <div className="card_register_new_r">
        <div className="left_register_new_r">
          <h1 className='head_register_new_r'>Lama Social.</h1>
          <p className='para_register_new_r'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className='mess_register_new_r'>Do you have an account?</span>
          <Link to="/login">
          <button className='login_but_register_new_r'>Login</button>
          </Link>
        </div>
        <div className="right_register_new_r">
          <h1 className='head_register_new_r'>Register</h1>
          <form className='register_form_new_r' onSubmit={handleRegister}>
            <div className='identity_register'>
              <div>
                <input type="radio" name='pos' value='customer' required/> 
                <label>Customer</label>
              </div>
              <div>
                <input type="radio" name='pos' value='shopkeeper'  onClick={()=>setis_shopkeeper(true)} required/> 
                <label>Shopkeeper</label>
              </div>
            </div>
            <input type="text" placeholder="Name" className='name_register_new_r' onChange={e=>setname(e.target.value)} required/>
            <input type="text"  placeholder="Contact Number" className='contact_register_new_r' onChange={e=>setcontact(e.target.value)} required/>
            <input type="email" placeholder="Email" className='email_register_new_r' onChange={e=>setemail(e.target.value)} required/>
            <input type="password" placeholder="Password" className='password_register_new_r' onChange={e=>setpassword(e.target.value)} required/>
            <input type="password" placeholder="Confirm Password" className='cnfpassword_register_new_r' onChange={e=>setcnfpassword(e.target.value)} required/>
            <button type="submit" className='register_button_new_r'>Register</button>
          </form>
        </div>
      </div>
    </div>
  ); 
}

export default Register;