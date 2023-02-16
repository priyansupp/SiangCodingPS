import React from 'react';

 function Register() { 
  return ( 
    <div> 
      <div>
			<form action=""> 
            <input type="radio" id="html" value="customer" />
                    <label for="html">customer</label><br />
                  <input type="radio" id="css"  value="shopkeeper" />
                  <label for="css">shopkeeper</label><br />
                Image: 
                <input type="file"></input>
				<div> 
					<label htmlFor="Name">Name</label>
					<input type="text" name="Name" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="Contact">Contact</label>
					<input type="text" name="Contact" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<div> 
					<label htmlFor="passw">Confirm Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Register</button>
			</form>
		</div>
    </div> 
  ); 
}

export default Register;