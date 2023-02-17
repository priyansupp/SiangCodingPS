import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css'

 function Register() { 
	const[email, setemail] = useState("");
	const[name, setname] = useState("");
	const[contact, setcontact] = useState("");
	const[password, setpassword] = useState("");
	const[cnfpassword, setcnfpassword] = useState("");
	const[is_shopkeeper, setis_shopkeeper] = useState(false);
	const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    const registerUser = async ()=>{
      if(password===cnfpassword){
        await axios.post("http://127.0.0.1:8000/api/auth/register/", {
            email:email,
            password:password,
            cnfpassword:cnfpassword,
            name:name,
            contact: contact,
            is_shopkeeper: is_shopkeeper,
            is_customer: !is_shopkeeper
        })
      }
      else 
        console.log("wrong password")
    }

    const getItems = async () => {
        setLoading(true);
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/customer/");
            
            console.log(response.data)
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
          <form className='register_form_new_r'>
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
            <input type="text" placeholder="Username" className='name_register_new_r' onChange={e=>setname(e.target.value)} required/>
            <input type="text"  placeholder="Contact Number" className='contact_register_new_r' onChange={e=>setcontact(e.target.value)} required/>
            <input type="email" placeholder="Email" className='email_register_new_r' onChange={e=>setemail(e.target.value)} required/>
            <input type="password" placeholder="Password" className='password_register_new_r' onChange={e=>setpassword(e.target.value)} required/>
            <input type="password" placeholder="Confirm Password" className='cnfpassword_register_new_r' onChange={e=>setcnfpassword(e.target.value)} required/>
            <button className='register_button_new_r' onClick={registerUser}>Register</button>
          </form>
        </div>
      </div>
    </div>
  ); 
}

export default Register;