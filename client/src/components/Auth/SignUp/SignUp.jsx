import React from 'react'
import styles from "./SignUp.module.css"

const SignUp = () => {
  return (
      <>
          <div className={styles.signup_container}>
              <div className={styles.signup_form}>
                  <h1>Sign Up</h1>
                  <form>
                      <label>Username</label>
                      <input type="text" placeholder="Enter your username" />
                      <label>Password</label>
                      <input type="password" placeholder="Enter your password" />
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Confirm your password" />
                      <button type="submit">Sign Up</button>
                  </form>
              </div>
          </div>
          
      </>
  )
}

export default SignUp