import { Link } from 'react-router-dom'
import useRegister from '../useRegister';
import './login.scss'
import twitter from '../../assets/svg/twitter-logo.svg'
const Login = () => {
    const { email, password, handlePasswordChange, handleEmailChange, handleSubmit, error } = useRegister();
  return (
    <>
    <div className="form_wrapper">
        <Link to={`/`}><img src={twitter} alt="Twitter" /></Link>
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='E-mail adress' onChange={handleEmailChange} value={email}/>
            {error.email && <p>{error.email}</p>}
            <input type="password" placeholder='Password' onChange={handlePasswordChange} value={password}/>
            {error.password && <p>{error.password}</p>}
        <button type='submit' className='login_btn'>Log in</button>
        </form>
        <div className="links">
            <Link to={`/`}>Forgot password?</Link>
            <Link to={`/register`}>Sign up to Twitter</Link>
        </div>
    </div> 
    </>
  )
}

export default Login
