import React from 'react'
import LoginButton from '../../components/form/LoginButton'
import { NavLink } from 'react-router-dom'
function SignUpPage() {
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <label htmlFor="password">Password</label>
        <input type="text" name='password'/>
        <input type="text" name='email'/>
        <LoginButton title="Sign Up" />
      </form>
      <div>already Sign Up ? <NavLink to='/signin'>SignIn </NavLink>now !!!</div>
    </>
  )
}

export default SignUpPage