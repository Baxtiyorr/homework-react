import useRegister from '../useRegister';
import './Register.scss'
const Register = () => {
    const { firstName, lastName, email, password, confirmPassword, error, handleSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange } = useRegister();
    
    return (
    <>
      <div className="register-wrapper">
        <h1>Create an account</h1>
        <form id='succeed'  onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Name" onChange={handleFirstNameChange} value={firstName}/>
            {error.firstName && <p className='error_text'>{error.firstName}</p>}
            <input type="text" placeholder="Last name" onChange={handleLastNameChange} value={lastName}/>
            {error.lastName && <p className='error_text'>{error.lastName}</p>}
            <input type="email" placeholder="E-mail" onChange={handleEmailChange} value={email}/>
            {error.email && <p className='error_text'>{error.email}</p>}
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password}/>
            {error.password && <p className='error_text'>{error.password}</p>}
            <input type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange} value={confirmPassword}/>
            {error.confirmPassword && <p className='error_text'>{error.confirmPassword}</p>}
        </form>
        <div className="register-text">
            <h4>Date of birth</h4>
            <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        </div>
        <button type="submit" form='succeed' className="reg_btn">Next</button>
      </div>
    </>
  )
}

export default Register
