import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import { TokenContext } from '../../context/tokenContext';

function Register() {
  const navigate = useNavigate();
	const[email, setemail] = useState("");
	const[name, setname] = useState("");
	const[contact, setcontact] = useState("");
	const[password, setpassword] = useState("");
	const[cnfpassword, setcnfpassword] = useState("");
	const[is_customer, setis_customer] = useState(false);
	const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setToken } = useContext(TokenContext);

    const registerUser = async (e)=>{
      e.preventDefault();
      if(password===cnfpassword){
        const res = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
            email:email,
            password:password,
            name:name,
            contact: contact,
            is_customer: is_customer
        });
        if(res.error) {
          console.log(typeof(res.error.data));
        }
        if(res.data) {
          const refresh_token = res.data.data['refresh'];
          const access_token = res.data.data['access'];
          // console.log(res.data.data['refresh']);
          // console.log(typeof(res.data));

          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          // create context that can be used overall in the app.
          setToken({'access_token': access_token, 'refresh_token': refresh_token});

          navigate('http://127.0.0.1:3000/');

          
        }
      }
      else {
        console.log("wrong password")
      }
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

    const getItems = async () => {
        setLoading(true);
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/customer/");
            
            // console.log(response.data)
            // data = {success: True, data:{ actual items}}
            setItems(response.data.data);
            setLoading(false);
        }
        catch(error){
            console.log('Error: ', error);
            setError(true);
            setLoading(false);
        }
    }
	useEffect(() => {
	  getItems();
	}, []);
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
                <input type="radio" name='pos' value='customer' onClick={()=>setis_customer(true)} required/> 
                <label>Customer</label>
              </div>
              <div>
                <input type="radio" name='pos' value='shopkeeper' required/> 
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