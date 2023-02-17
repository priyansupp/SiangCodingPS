import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

 function Register() { 
	const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
	
    const registerUser = async ()=>{
        await axios.post("http://127.0.0.1:8000/api/auth/register/", {
            email:"mokshith@gmail.com",
            password:"12345",
            name:'posa'
        })
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
        // getItemsFromJson()
    }, []);


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
				<button onClick = {registerUser} type="submit">Register</button>
			</form>
		</div>
    </div> 
  ); 
}

export default Register;