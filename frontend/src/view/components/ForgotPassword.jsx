import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleForgotPassword } from '../../controller/userManagementController';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmitForgotPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await handleForgotPassword(email, setFeedbackMessage);
    if (result) {
      navigate('/reset-password');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#001529' }}>Forgot Password</h2>
        {feedbackMessage && (
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">{feedbackMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmitForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'}`}
            style={{ backgroundColor: isSubmitting ? '#ccc' : '#001529' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
