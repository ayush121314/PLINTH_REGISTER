/* 
import React from 'react';

const ConfirmationPage = () => {
  return (
    <div>
      <h1>Thank You for Registering!</h1>
      <p>Your registration details will be shared with you on WhatsApp soon.</p>
      <p>We appreciate your participation!</p>
    </div>
  );
};

export default ConfirmationPage; */

// ConfirmationPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Registering!</h1>
        <p className="text-gray-600 text-lg mb-2">
          You can contact 9125466700 if you want any further details.
          Your registration details will be shared with you on WhatsApp soon.
        </p>
        <p className="text-gray-600 mb-6">We appreciate your participation!</p>
        <button
          onClick={handleGoHome}
          className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;

