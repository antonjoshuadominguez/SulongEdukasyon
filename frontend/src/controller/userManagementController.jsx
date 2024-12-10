import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const handleSignIn = async (e, formData, setError, navigate) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API_URL}/users/login`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      navigate('/dashboard');
      setError(''); 
    }
  } catch (error) {
    setError('Invalid email or password');
  }
};

export const handleSignUp = async (e, formData, setError) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API_URL}/users/register`, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      alert('Account created successfully');
      setError(''); 
    }
  } catch (error) {
    setError('Failed to create account');
  }
};

export const handleForgotPassword = async (email, setDisplayFeedbackMessage) => {
  const url = `${API_URL}/users/forget-password`;
  setDisplayFeedbackMessage('Sending OTP, please wait...');
  try {
    const response = await axios.post(url, { email }, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      setDisplayFeedbackMessage('OTP sent to your email.');
      return true;
    }
  } catch (error) {
    setDisplayFeedbackMessage('Failed to send OTP, please try again.');
    return false;
  }
};

export const handleResetPassword = async (email, otp, newPassword, setDisplayFeedbackMessage) => {
  const url = `${API_URL}/users/reset-password`;
  try {
    const response = await axios.patch(url, { email, otp, newPassword }, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      setDisplayFeedbackMessage('Password reset successfully.');
      return true;
    }
  } catch (error) {
    setDisplayFeedbackMessage('Failed to reset password, please try again.');
    return false;
  }
};
