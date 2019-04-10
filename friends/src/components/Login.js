import React from 'react'
import {Link} from 'react-router-dom'

const Login = props =>{
    return(
        <div className='login-container'>
        <form>
        <p>Login Here</p>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <Link to='/friends'><button>Login</button></Link>
        </form>
        </div>
    )
}

export default Login