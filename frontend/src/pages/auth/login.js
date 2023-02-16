import React, { useState } from 'react'
import axios from 'axios';

const Login=()=>{

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		// console.log(email + password);
		e.preventDefault();
		const data = {
			"email": email,
			"password": password
		}
		await axios.post("/api/auth/login", data).then((response) => {
			const { token } = response.data;			// token has refresh and access token components
			localStorage.setItem('token', token);		// sets the token in localstorage
		})
	}

	return(
		<div>
			<form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" onChange={(e) => setPassword(e.target.value)} value={password}/> 
				</div>  
				<button type="submit" onClick={handleLogin}>Login</button>
			</form>
		</div>
	)
}

export default Login;