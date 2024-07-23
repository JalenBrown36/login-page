import './App.css'

function App() {
  return (
    <>
      <section className='login-container'>
        <div className='user-login'>
          <div className='header-container'>
            <h1><span>Welcome back!</span></h1>
            <p><span>Enter your username and password to log in to your admin panel</span></p>
          </div>
          <div className='google-login-wrapper'>
            <img src="public\google-icon.png" alt="google icon" />
            <button className='google-btn'>
              <span>Login in with Google</span>
            </button>
          </div>
          <div className='input-form'>
            <div className='input-wrapper'>
              <label>Email</label>
              <input type='text' placeholder='Email' name='email'/>
            </div>
            <div className='input-wrapper'>
              <label>Password</label>
              <input type='password' placeholder='Password' name='password'/>
            </div>
            <div className='checkbox-wrapper'>
              <label>
                <input name='cb' type='checkbox' />
              </label>
              <label htmlFor='cb'>Remember me</label>
            </div>
            <div className='btn-wrapper'>
              <button className='login-btn'>Log in</button>
            </div>
          </div>
          <div className='sign-up-form'>
            <div>
              <p><span>Don't have account yet?</span></p>
              <a href=''><span>Sign up</span></a>
            </div>
            <a href=''><span>Forgot your password?</span></a>
          </div>
        </div>
        <div className='login-img'>
          Sample image
        </div>
      </section>
    </>
  )
}

export default App
