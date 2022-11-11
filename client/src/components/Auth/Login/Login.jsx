import React, { useState } from "react";
import st from "./Login.module.css";
import Axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	


	const addtoDB = (e) => {
		// e.preventDefault();
		console.log("added user to db");
		Axios.post("http://localhost:8080/userinsert", {
			name: name,
			email: email,
			password: password,
		});
		}
	

  return (
    <>
      <div className={st.login_container}>
        <div className={st.login_form}>
          <h1>Sign In</h1>
					<div className="form">
            {/* <label>Username</label> */}
			            <div >
						<input
						    className={st.user}
							type="text"
							placeholder="Enter your username"
							onChange={(e) => setName(e.target.value)}
						/>
						</div>
						{/* <label>Email</label> */}
						<input
						    className={st.email}
							type="email"
							placeholder="Enter your email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						{/* <label>Password</label> */}
						<input
						    className={st.pass}
							type="password"
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className={st.login_btn}
							onClick={addtoDB}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
