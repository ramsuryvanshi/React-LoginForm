import React, { useState } from 'react'
 

function AuthForm() {
const [islogin, setIslogin] = useState(false)
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle' >
                <button className={islogin ?'active':''} onClick={()=>setIslogin(true)}>Login</button>
                <button className={!islogin ?'active':''} onClick={()=>setIslogin(false)}>Signup</button>
            </div>
             {islogin ?<>
             <div className='form'>
              <h2>Login Form</h2>
              <input type='email' placeholder='Email'/>
           
              <input type='password' placeholder='Password'/>
        
              <a href='#'>Forgot Password</a>
            
              <button className='login'>Login</button>
               <br></br>
               <p>Not a Member?<a href='#' onClick={()=>setIslogin(false)}>Signup Now</a></p>
             </div>
             </>
             : <>
              <div className='form'>
                <h2>Signup Form</h2>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <inpur type='password' placeholder='confirm password'/>
                <button className='login'>Signup</button>
              </div>
             </>}
        </div>
    </div>
  )
}

export default AuthForm