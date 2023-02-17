import React from 'react';
import './Register.css'

 function Register() { 
  return ( 
    <div className='register_all'> 
      <div className='register_box'>
        <div className='type_box'>
        <div className='head_register'>
            Register
        </div>
			<form action=""> 
            <div className='decision_register'>
                <input type="radio" id="html" name="register" value="customer" />
                <label for="html">customer</label><br />
                <input type="radio" id="css" name="register" value="shopkeeper" />
                <label for="css">shopkeeper</label><br />
            </div>
                <div className='img_upload_register'>
                    Image: 
                    <input type="file"></input>
                </div>
				<div className='name_register'> 
					<label htmlFor="Name">Name</label>
					<input type="text" name="Name"/> 
				</div> 
				<div className='contact_register'> 
					<label htmlFor="Contact">Contact</label>
					<input type="text" name="Contact"/> 
				</div> 
				<div className='email_register'> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div className='password_register'> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<div className='cnfpassword_register'> 
					<label htmlFor="passw">Confirm Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Register</button>
			</form>
		</div>
        </div>
    </div> 
  ); 
}

export default Register