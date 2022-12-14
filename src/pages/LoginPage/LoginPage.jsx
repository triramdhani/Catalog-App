import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginButton from '../../components/form/LoginButton'

function LoginPage() {
  const getLoginData = {
    email : ""
  }
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <label htmlFor="password">Password</label>
        <input type="text" name='password'/>
        <input type="text" name='email'/>
        <LoginButton title="Sign In" />
      </form>
      <div>Have You Sign Up ? <NavLink to='/signUp'>Sign Up</NavLink>now !!!</div>
    </>
  )
}

export default LoginPage