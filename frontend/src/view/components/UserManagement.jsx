import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignIn, handleSignUp } from '../../controller/userManagementController'; 
import '../css/UserManagement.css';

const UserManagement = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  
  const [isSuccess, setIsSuccess] = useState(false);  
  const navigate = useNavigate();

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = { email, password };
    handleSignIn(e, formData, setErrorMessage, navigate)
      .finally(() => setIsLoading(false)); 
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    const formData = { firstname, lastname, email, password, role };
    handleSignUp(e, formData, setErrorMessage)
      .then(() => {
        setIsSuccess(true); 
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false)); 
  };

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmitSignUp}>
          <h1>Create Account</h1>
          <input 
            type="text" 
            placeholder="First Name" 
            value={firstname} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            value={lastname} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" disabled={isLoading}>Sign Up</button>
          {isLoading && <div className="loader">Loading...</div>}  
          {isSuccess && !isLoading && <p className="success">Registration successful!</p>} 
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmitSignIn}>
          <h1>Sign in</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <a href="#" onClick={() => navigate('/ForgotPassword')}>Forgot your password?</a>
          <button type="submit" disabled={isLoading}>Sign In</button>
          {isLoading && <div className="loader">Loading...</div>} 
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setRightPanelActive(false)} id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setRightPanelActive(true)} id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
